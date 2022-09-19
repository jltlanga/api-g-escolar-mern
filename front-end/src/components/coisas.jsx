const Navbar = () => {
    const [activeTab, setactiveTab] = useState("Home")
    const [search, setSearch] = useState('')
    const loction = useLocation();
    const navigate = useNavigate()
  
    useEffect(() => {
      if (loction.pathname === '/') {
        setactiveTab('Home');
      }
      else if (loction.pathname === '/add') {
        setactiveTab('Add');
      }
      else if (loction.pathname === '/about') {
        setactiveTab('About');
      }
  
    }, [loction])
  
    const handleSubmit = ((e) => {
      e.preventDefault();
      navigate(`/search?contact=${search}`)
      setSearch("")
    }) }   
    
    <div className="header-right">

        <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
          <input type="text"
            className="inputfield"
            placeholder='Pesquisar contato...'
            onChange={(e) => setSearch(e.target.value)}
            value={search} />
        </form>

        <Link to='/'>
          <p className={`${activeTab === "Home" ? 'active' : ""}`}
            onClick={() => setactiveTab('Home')}>Home</p>
        </Link>


        <Link to='/add'>
          <p className={`${activeTab === "AddStudent" ? 'active' : ""}`}
            onClick={() => setactiveTab('AddStudent')}> Adicionar </p>
        </Link>

        <Link to='/about'>
          <p className={`${activeTab === "About" ? 'active' : ""}`}
            onClick={() => setactiveTab('About')}>Sobre </p>
        </Link>

      </div>