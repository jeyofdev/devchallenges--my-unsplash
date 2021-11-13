/* eslint-disable @next/next/no-img-element */
import { ImagePropsType } from '../../types';

const Image = ({ id, label, src, alt, onClick }: ImagePropsType) => (
  <div className="group mb-35 md:mb-35 rounded-2xl bg-gray-900 relative">
    <img
      key={id}
      src={src}
      alt={alt}
      className="bg-gray-200 rounded-2xl break-inside w-full cursor-pointer hover:opacity-40"
    />

    <button
      type="button"
      className="absolute mr-4 mt-4 py-1.25 px-4 top-0 right-0 opacity-0 group-hover:opacity-100 border border-danger border-solid rounded-full not-italic font-medium text-10 leading-3 text-danger"
      onClick={onClick}
    >
      Delete
    </button>

    <h2 className="ml-4 mb-4 absolute bottom-0 opacity-0 group-hover:opacity-100 not-italic font-bold text-lg leading-22 text-light">
      {label}
    </h2>
  </div>
);

export default Image;
