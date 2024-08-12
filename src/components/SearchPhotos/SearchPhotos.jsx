import { Field, Form, Formik } from 'formik';
import { TbPhotoSearch } from 'react-icons/tb';

const SearchPhotos = ({ handleChengeQuery }) => {
  const handleSubmit = (value, options) => {
    handleChengeQuery(value.search);
    options.resetForm();
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={{ search: '' }}>
        <Form>
          <label htmlFor="search" className="flex relative">
            <Field
              className=" text-base  flex align-baseline px-2 pr-12 w-64 rounded-lg placeholder-cyan-700  outline-cyan-700"
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button
              className="  p-2 block absolute -top-1 right-0"
              type="submit"
            >
              <TbPhotoSearch className="text-cyan-700" />
            </button>
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchPhotos;
