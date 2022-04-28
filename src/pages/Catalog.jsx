import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import Partners from '../components/Partners';
import { API } from '../tools/constants';
import { ScaleLoader } from 'react-spinners';

const Catalog = () => {
    const [category, setCategory] = useState([])

    const [taxeometr, setTaxeometr] = useState([])
    const [gnss, setGnss] = useState([])
    const [nivelir, setNivelir] = useState([])
    const [lazerniy, setLazerniy] = useState([])
    const [teodolit, setTeodolit] = useState([])
    const [trassoiskatel, setTrassoiskatel] = useState([])
    const [acsessuary, setAcsessuary] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('1');

    const [all, setAll] = useState([])
    const [categories, setCategories] = useState([])
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

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            {loading ?
                <div className="loader">
                    <img src="/img/logo.png" alt="" />
                    <ScaleLoader
                        className="loader"
                        loading={loading}
                        size="70"
                        color="#d6171f"
                    />
                </div> : ''}
            <div className="catalog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-5">
                            <h2><span>К</span>аталог</h2>
                        </div>
                    </div>

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
                                                onClick={() => { toggle(`${index + 1}`); getId(item.id) }}
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
                                                    <Link className='d-flex myCard align-items-center' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
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
                                                    <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
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
                                                    <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
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
                                                    <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>

                                <TabPane tabId="5" className='   '>
                                    <Row>
                                        {teodolit.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
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
                                                    <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
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
                                                    <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
                                                        </div>
                                                        <div>
                                                            <h5>{item.title}</h5>
                                                            {/* <p className='mt-3'>{item.description.substring(0, 40)}...</p> */}
                                                        </div>
                                                    </Link>
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
            <Partners />
        </>
    )
}

export default Catalog