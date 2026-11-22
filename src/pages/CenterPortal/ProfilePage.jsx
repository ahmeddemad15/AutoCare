import { useState } from "react";

import FormField from "./components/center/FormField";
import getInitials from "./components/getInitials";

const FIELDS = ["name", "branch", "phone", "email", "address", "description"];

// Copy only the editable fields from the saved center info ('' if a field is missing)
const pickFields = (info) =>
  Object.fromEntries(FIELDS.map((field) => [field, info[field] ?? ""]));

const trimValues = (values) =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, value.trim()]),
  );

const validate = (values) => {
  const errors = {};

  if (values.name.length < 3) {
    errors.name = "Center name must be at least 3 characters.";
  }
  if (values.branch === "") {
    errors.branch = "Branch is required.";
  }
  if (!/^01[0125]\d{8}$/.test(values.phone)) {
    errors.phone = "Enter a valid Egyptian mobile number, e.g. 01023456789.";
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.address.length < 5) {
    errors.address = "Address must be at least 5 characters.";
  }
  if (values.description.length > 200) {
    errors.description = "Description must be 200 characters or less.";
  }

  return errors;
};

const ProfilePage = ({ centerInfo, updateCenterInfo }) => {
  const [values, setValues] = useState(() => pickFields(centerInfo));
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Is anything different from what is saved?
  const isDirty = FIELDS.some(
    (field) => values[field] !== (centerInfo[field] ?? ""),
  );

  // One handler for every input: the "name" attribute tells us which field changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setIsSaved(false);
  };

  const handleReset = () => {
    setValues(pickFields(centerInfo));
    setErrors({});
    setIsSaved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmed = trimValues(values);
    const validationErrors = validate(trimmed);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSaving(true);
    const isSuccess = await updateCenterInfo(trimmed);
    setIsSaving(false);

    if (isSuccess) {
      setValues(trimmed);
      setIsSaved(true);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Summary card */}
      <section className="flex flex-wrap items-center gap-4 rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 sm:p-6">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-linear-to-br from-(--cp-accent) to-(--cp-blue) text-xl font-black text-white">
          {getInitials(centerInfo.name)}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-xl font-extrabold sm:text-2xl">
            {centerInfo.name}
          </h2>
          <p className="text-sm text-(--cp-muted)">
            {centerInfo.branch} • Center Admin
          </p>
          <p className="mt-1 text-xs font-bold text-amber-500"></p>
        </div>
      </section>

      {/* Edit form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 sm:p-6"
      >
        <h3 className="mb-5 text-lg font-extrabold">👤 Center Information</h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="profile-name"
            name="name"
            label="Center name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="organization"
          />
          <FormField
            id="profile-branch"
            name="branch"
            label="Branch"
            value={values.branch}
            onChange={handleChange}
            error={errors.branch}
          />
          <FormField
            id="profile-phone"
            name="phone"
            label="Phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            hint="Egyptian mobile number, 11 digits."
            autoComplete="tel"
          />
          <FormField
            id="profile-email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
        </div>

        <div className="mt-5 grid gap-5">
          <FormField
            id="profile-address"
            name="address"
            label="Address"
            value={values.address}
            onChange={handleChange}
            error={errors.address}
            autoComplete="street-address"
          />
          <FormField
            id="profile-description"
            name="description"
            as="textarea"
            rows={4}
            label="Description"
            value={values.description}
            onChange={handleChange}
            error={errors.description}
            hint={`${values.description.length}/200 characters`}
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={!isDirty || isSaving}
            className="cursor-pointer rounded-lg bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-sky-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isSaving ? "Saving..." : "Save changes"}
          </button>
          <button
            type="button"
            disabled={!isDirty || isSaving}
            onClick={handleReset}
            className="cursor-pointer rounded-lg border border-(--cp-line) px-5 py-2.5 text-sm font-bold text-(--cp-muted) transition hover:border-(--cp-accent) hover:text-(--cp-text) disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reset
          </button>

          {isSaved && (
            <p role="status" className="text-sm font-bold text-emerald-400">
              ✔️ Profile saved.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
