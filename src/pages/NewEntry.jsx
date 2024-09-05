import { useState, useEffect, useRef } from "react";

function NewEntry({
  isNewEntryDialogOpen,
  toggleNewEntryDialog,
  addEntry,
  checkDuplicateDate,
}) {
  const initialFormState = {
    date: new Date().toISOString().split("T")[0],
    title: "",
    content: "",
    img_url: "",
  };

  // console.log(initialFormState.date);

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [fileUploaded, setFileUploaded] = useState(false);

  const imageInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUploaded(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          img_url: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFileUploaded(false);
      setFormData({
        ...formData,
        img_url: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (checkDuplicateDate(formData.date))
      newErrors.date = "An entry for this date already exists.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.content.trim()) newErrors.content = "Content is required.";
    if (!formData.img_url.trim()) newErrors.img_url = "Image URL or selecting a file is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      addEntry(formData);
      toggleNewEntryDialog();
      setFormData(initialFormState);
      setErrors({});
    }
  };

  const resetImageInput = () => {
    imageInputRef.current.value = "";
    setFileUploaded(false);
    setFormData({
      ...formData,
      img_url: "",
    });
  };

  useEffect(() => {
    if (!isNewEntryDialogOpen) {
      setFormData(initialFormState);
      setErrors({});
    }
  }, [isNewEntryDialogOpen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg mb-3">Add New Diary Entry</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Date:</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title:</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Content:</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
            {errors.content && <p className="text-red-500">{errors.content}</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Upload Image:</span>
            </label>
            <div>
              <input
                type="file"
                name="img_url"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full max-w-xs"
                ref={imageInputRef}
              />
              {fileUploaded && (
                <button
                  className="btn btn-secondary btn-circle btn-outline ml-4"
                  onClick={() => resetImageInput()}
                    >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            {errors.img_url && <p className="text-red-500">{errors.img_url}</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Or specify an Image URL:</span>
            </label>
            <input
              type="text"
              name="img_url"
              value={formData.img_url}
              onChange={handleChange}
              className="input input-bordered w-full"
              // Disable the input field if a file is uploaded
              disabled={fileUploaded}
            />

            {errors.img_url && <p className="text-red-500">{errors.img_url}</p>}
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary hover:bg-accent">
              Submit
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => toggleNewEntryDialog()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEntry;
