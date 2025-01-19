import { useFormik } from "formik";
import * as yup from "yup";
import { apiUrl } from "../main";

const TaskFormScheme = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  status: yup.string().required("Status is required"),
  photoUrl: yup.mixed().required("Photo is required"),
  dueDate: yup.date().required("Due Date is required"),
});

const formValues = {
  title: "",
  description: "",
  status: "",
  photoUrl: null, // Change from string to null for file handling
  dueDate: "",
};

export const TaskForm = () => {
  const formik = useFormik({
    initialValues: formValues,
    validationSchema: TaskFormScheme,
    onSubmit: async (values) => {
        try {
          const formData = new FormData();
      
          // Append other fields
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("status", values.status);
          formData.append("dueDate", values.dueDate);
      
          // Append photoUrl only if it contains a valid file
          if (values.photoUrl) {
            formData.append("photoUrl", values.photoUrl);
          }
      
          const response = await fetch(apiUrl, {
            method: "POST",
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log("Response from server:", data);
        } catch (error) {
          console.error("Error submitting task:", error);
        }
      },
  });

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8"
          onSubmit={formik.handleSubmit}
        >
          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-2 px-3"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.title}</div>
            )}
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-2 px-3"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.description}</div>
            )}
          </div>

          {/* Status Field */}
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-2 px-3"
              id="status"
              name="status"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.status}
            />
            {formik.errors.status && formik.touched.status && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.status}</div>
            )}
          </div>

          {/* Photo Upload Field */}
          <div className="mb-4">
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Photo
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-2 px-3"
              id="photoUrl"
              name="photoUrl"
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0];
                formik.setFieldValue("photoUrl", file); // Set the file in formik state
              }}
            />
            {formik.errors.photoUrl && formik.touched.photoUrl && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.photoUrl}</div>
            )}
          </div>

          {/* Due Date Field */}
          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-2 px-3"
              id="dueDate"
              name="dueDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dueDate}
            />
            {formik.errors.dueDate && formik.touched.dueDate && (
              <div className="text-red-500 text-xs mt-1">{formik.errors.dueDate}</div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
