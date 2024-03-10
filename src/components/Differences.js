
export const Differences = ({ icon, title, info }) => {
    return (
      <>
        <li className="relative float-left w-200 h-200 m-5 p-0 list-none">
          <a className="inline-block vertical-align-top no-underline rounded-m">
            {icon}
          </a>
          <div className="info transform rotate-x-90 w-full h-full p-20 absolute top-0 left-0 rounded-md pointer-events-none bg-green-500 bg-opacity-90">
            <h3 className="m-0 text-white text-opacity-90 text-16">{title}</h3>
            <p className="text-12 leading-1.5 text-white text-opacity-80">
              {info}
            </p>
          </div>
        </li>
      </>
    );
  };