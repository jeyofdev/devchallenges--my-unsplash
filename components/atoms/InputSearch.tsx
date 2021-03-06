import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { PhotosContext } from '../../context/PhotosContext';
import { InputSearchPropsType } from '../../types';
import imagesApp from '../../datas/files';

const InputSearch = ({ placeholder, icon }: InputSearchPropsType) => {
  const context = useContext(PhotosContext);
  const [search, setSearch] = useState('');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    await setSearch(e.target.value);
  };

  useEffect(() => {
    if (search !== '') {
      const filteredPhotos: any = context?.photosList.filter(
        (photo) => photo.label.includes(search) && photo
        // eslint-disable-next-line function-paren-newline
      );

      context?.setPhotosList(filteredPhotos);
    } else {
      context?.setPhotosList(imagesApp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      {icon ? (
        <>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="#BDBDBD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>

          <input
            type="text"
            name=""
            id=""
            placeholder={placeholder}
            className="w-full pl-12 border border-solid border-gray-300 rounded-xl p-4.5 not-italic font-medium text-sm leading-5 text-gray-300 placeholder-gray-300 outline-none"
            value={search}
            onChange={handleChange}
          />
        </>
      ) : (
        <input
          type="text"
          name=""
          id=""
          placeholder={placeholder}
          className="w-full border border-solid border-gray-300 rounded-xl p-4.5 not-italic font-medium text-sm leading-5 text-gray-300 placeholder-gray-300 outline-none"
          value={search}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default InputSearch;
