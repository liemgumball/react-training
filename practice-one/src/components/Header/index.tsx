type HeaderProps = {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ searchText, setSearchText }: HeaderProps) => {
  return (
    <header className="flex justify-end gx-3 py-5 px-8">
      <div className="input-with-icon relative min-w-max">
        <input
          type="text"
          name="Search"
          id="search"
          placeholder="Search by name..."
          className="py-2 px-5 rounded-lg border-2 border-custom-gray text-lg"
          value={searchText}
          onChange={(e) => {
            e.preventDefault()
            setSearchText(e.target.value)
          }}
        />
        <i className="fa fa-search fa-lg text-custom-gray absolute right-5 top-1/2 transform -translate-y-1/2"></i>
      </div>
    </header>
  )
}

export default Header
