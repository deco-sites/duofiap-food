export interface Props {
  menuHamburger?: Array<{
    title?: string;
    url?: string;
  }>;
  titleMenuDropdown?: string;
  menuDropdown?: Array<{
    title?: string;
    url?: string;
  }>;
  menuOthers?: Array<{
    title?: string;
    url?: string;
  }>;
  logo: {
    src?: string;
    alt?: string;
  };
  searchInput?: true | false;
  iconsUrls?: {
    search?: string;
    heart?: string;
    location?: string;
    person?: string;
    shop?: string;
  };
  button?: {
    active?: true | false;
    label?: string;
    url?: string;
  };
  language?: Array<string>;
}

const Header = (props: Props) => {
  const {
    menuHamburger,
    titleMenuDropdown,
    menuDropdown,
    menuOthers,
    logo,
    searchInput,
    iconsUrls,
    language,
    button,
  } = props;

  return (
    <header className="navbar px-8 py-7 max-h-[120px] min-h-[72px] w-full  border border-solid border-b-[#aaaaaa] bg-black lg:px-16  ">
      <div className=" w-1/4 justify-center md:navbar-start">
        <button className="btn btn-ghost btn-circle">
          <img src={logo?.src} alt={logo?.alt} />
        </button>
      </div>

      <div className="w-1/4 justify-center flex flex-col md:navbar-center">
        {searchInput
          ? (
            <div className="hidden form-control justify-center  relative lg:flex">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full pl-11"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 absolute mr-2 w-10 fill-none stroke-[#aaaaaa]"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )
          : null}
      </div>

      <div className="w-2/4 justify-center  gap-6 md:navbar-end">
        <button
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.person}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM10 16C9.20435 16 8.44129 16.3161 7.87868 16.8787C7.31607 17.4413 7 18.2043 7 19V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V19C5 17.6739 5.52678 16.4021 6.46447 15.4645C7.40215 14.5268 8.67392 14 10 14H14C15.3261 14 16.5979 14.5268 17.5355 15.4645C18.4732 16.4021 19 17.6739 19 19V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V19C17 18.2044 16.6839 17.4413 16.1213 16.8787C15.5587 16.3161 14.7956 16 14 16H10Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>

        <button className="btn btn-ghost" href={iconsUrls?.shop}>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>

        {button?.active && (
          <button
            href={button?.url}
            className={"hidden btn w-20 h-10 min-h-full py-2 px-3 md:flex"}
          >
            {button?.label}
          </button>
        )}
      </div>
    </header>
  );
};

Header.props = {
  menuHamburger: [{ title: "Category", url: "#" }],
  titleMenuDropdown: "Category",
  menuDropdown: [{ title: "Category", url: "#" }],
  menuOthers: [{ title: "Sales", url: "#" }],
  logo: {
    src: "https://dummyimage.com/120x120/aaaaaa/000000.png",
    alt: "deco",
  },
  searchInput: true,
  iconsUrls: {
    search: "#",
    heart: "#",
    location: "#",
    person: "#",
    shop: "#",
  },
  language: ["EN", "PT"],
  button: {
    active: true,
    label: "button",
    url: "#",
  },
};

export default Header;
