import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { API } from '../tools/constants';

const Navbar = () => {

    const [burger, setBurger] = useState(false);

    const [myTabs, setMyTabs] = useState(false);
    const [activeTab, setActiveTab] = useState('1');
    const [navbar, setNavbar] = useState(false);
    const [categories, setCategories] = useState([])
    const location = useLocation()

    const [category, setCategory] = useState([])

    const [taxeometr, setTaxeometr] = useState([])
    const [gnss, setGnss] = useState([])
    const [nivelir, setNivelir] = useState([])
    const [lazerniy, setLazerniy] = useState([])
    const [teodolit, setTeodolit] = useState([])
    const [trassoiskatel, setTrassoiskatel] = useState([])
    const [acsessuary, setAcsessuary] = useState([])
    const [loading, setLoading] = useState(false)
    // const [activeTab, setActiveTab] = useState('1');

    const [all, setAll] = useState([])
    // const [categories, setCategories] = useState([])
    const [ids, setIds] = useState(1)


    const getAll = async () => {
        await axios.get(API + `api/category/${ids}`)
            .then((res) => {
                setAll(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const getId = (id) => {
        setIds(id)
    }

    const getAllCategory = () => {
        axios.get(API + 'api/category')
            .then((res) => {
                setCategories(res.data)
            })
            .catch(err => { console.log(err); })
    }


    const getCategory = async () => {
        await axios.get(API + 'api/category')
            .then((res) => {
                setCategory(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTaxeometr = async () => {
        await axios.get(API + 'api/category/1')
            .then((res) => {
                setTaxeometr(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const getGnss = async () => {
        await axios.get(API + 'api/category/2')
            .then((res) => {
                setGnss(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getNivelir = async () => {
        await axios.get(API + 'api/category/3')
            .then((res) => {
                setNivelir(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getLazerniy = async () => {
        await axios.get(API + 'api/category/4')
            .then((res) => {
                setLazerniy(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTeo = async () => {
        await axios.get(API + 'api/category/5')
            .then((res) => {
                setTeodolit(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTrass = async () => {
        await axios.get(API + 'api/category/6')
            .then((res) => {
                setTrassoiskatel(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getAcs = async () => {
        await axios.get(API + 'api/category/7')
            .then((res) => {
                setAcsessuary(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        setLoading(true)

        getId()
        getAll()
        getAllCategory()

        getCategory()

        getTaxeometr()
        getGnss()
        getNivelir()
        getLazerniy()
        getTeo()
        getTrass()
        getAcs()

        setTimeout(() => {
            setLoading(false)
        }, 1400)
    }, [])

    // const [ids, setIds] = useState(0)
    // const [taxeometr, setTaxeometr] = useState([])

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    // const getAllCategory = () => {
    //     axios.get(API + 'api/category')
    //         .then((res) => {
    //             setCategories(res.data)
    //             console.log(categories);
    //         })
    //         .catch(err => { console.log(err); })
    // }

    // const getTaxeometr = async (id) => {
    //     await axios.get(API + `api/category/${id}`)
    //         .then((res) => {
    //             setTaxeometr(res.data.products)
    //             console.log(taxeometr);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })

    // }


    // const changeNavbar = () => {
    //     if (window.scrollY >= 30) {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false)
    //     }
    // }

    // window.addEventListener('scroll', changeNavbar);


    // useEffect(() => {
    //     getAllCategory()
    //     getTaxeometr()
    // }, [])

    return (
        <>

            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="nav-01 col-12">
                            {/* Burger */}

                            <div className="mob-nav d-flex align-items-center">
                                <div className="col-lg-1 col-4 m-0 d-md-block d-lg-none">
                                    <Link onClick={() => setMyTabs(false)} to='/'>
                                        <img src="/img/logo.png" style={{ width: '180px' }} alt="" />
                                    </Link>
                                </div>

                                <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                                    <div className="burger1"></div>
                                    <div className="burger2"></div>
                                    <div className="burger3"></div>
                                </div>
                            </div>

                            <div className={`col-lg-12 nimadur ${burger ? '' : 'burgered'}`}>
                                <ul className={`d-flex justify-content-between align-items-center`}>
                                    <li className='d-md-block d-lg-none'>
                                        <Link className={`${location.pathname === '/' ? 'active' : ''}`} onClick={() => {setBurger(false); setMyTabs(false)}} to='/'> Главная </Link>
                                    </li>
                                    <li>
                                        <Link to='/catalog'
                                            onClick={() => {setBurger(false); setMyTabs(false)}}
                                            className={`katalog ${location.pathname === '/catalog' ? 'active' : ''}`}
                                            onMouseEnter={() => {
                                                setMyTabs(true)
                                            }}
                                            id="katalog"
                                        >
                                            Каталог
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`${location.pathname === '/services' ? 'active' : ''}`} onClick={() => {setBurger(false); setMyTabs(false)}} to='/services'> Услуги </Link>
                                    </li>
                                    <li className='d-none d-lg-block'>
                                        <Link onClick={() => {setBurger(false); setMyTabs(false)}} to='/'>
                                            <img src="/img/logo.png" style={{ width: '180px' }} alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={`${location.pathname === '/about' ? 'active' : ''}`} onClick={() => {setBurger(false); setMyTabs(false)}} to='/about'> О компании </Link>
                                    </li>
                                    <li>
                                        <Link className={`${location.pathname === '/contacts' ? 'active' : ''}`} onClick={() => {setBurger(false); setMyTabs(false)}} to='/contacts'> Контакты </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>


            <div onMouseLeave={() => setMyTabs(false)} className={`myTab d-none d-lg-block ${myTabs ? 'active' : ''} ${navbar ? 'actived' : null}`}>
                <div onClick={() => setMyTabs(false)} className="closes">x</div>



                <div className="catalog-page">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-3">
                                <Nav tabs className='d-flex flex-column justify-content-end  nav-pills nav-justified'>
                                    {categories.map((item, index) => {
                                        return (
                                            <NavItem
                                                key={index}
                                            >
                                                <NavLink
                                                    className={classnames({ active: activeTab === `${index + 1}` })}
                                                    onMouseEnter={() => { toggle(`${index + 1}`); getId(item.id) }}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    })}
                                </Nav>
                            </div>

                            <div className="col-lg-9">
                                <TabContent activeTab={activeTab}>

                                    <TabPane tabId="1" className=''>
                                        <Row className='align-items-center'>
                                            {taxeometr.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex myCard align-items-center' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="2" className=''>
                                        <Row>
                                            {gnss.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex align-items-center myCard' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="3" className='   '>
                                        <Row>
                                            {nivelir.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex align-items-center myCard' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="4" className='   '>
                                        <Row>
                                            {lazerniy.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex align-items-center myCard' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="5" className=''>
                                        <Row>
                                            {teodolit.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex align-items-center myCard' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="6" className='   '>
                                        <Row>
                                            {trassoiskatel.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex align-items-center myCard' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                    <TabPane tabId="7" className=''>
                                        <Row>
                                            {acsessuary.map((item, index) => {
                                                return (
                                                    <div className="col-lg-6 mb-4" key={index}>
                                                        <a  className='d-flex align-items-center myCard' href={`/new-catalog/${item.id}`}  >
                                                            <div>
                                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                            </div>
                                                            <div>
                                                                <h5>{item.title}</h5>
                                                                {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </Row>
                                    </TabPane>

                                </TabContent>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default Navbar