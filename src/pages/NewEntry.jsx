import { useState, useEffect } from "react";

function NewEntry({ isNewEntryDialogOpen, toggleNewEntryDialog, addEntry }) {
  const initialFormState = {
    date: new Date(),
    title: "",
    content: "",
    img_url: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          img_url: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.content.trim()) newErrors.content = "Content is required.";
    if (!formData.img_url.trim()) newErrors.img_url = "Image URL is required.";
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

  useEffect(() => {
    if (!isNewEntryDialogOpen) {
      setFormData(initialFormState);
      setErrors({});
    }
  }, [isNewEntryDialogOpen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">Add New Diary Entry</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
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
              <span className="label-text">Content</span>
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
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              name="img_url"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full max-w-xs"
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
