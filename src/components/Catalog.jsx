import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../tools/constants'

const Catalog = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(API + 'api/category')
            .then((res) => {
                setCategory(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="pop-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2><span>П</span>опулярный каталог</h2>
                        </div>
                        {/* {category?.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-3 mt-5 col-md-6 pop-category">
                                    <div className="card h-100">
                                        <Link to={`/catalog/${item.id}`}>
                                            <img
                                                src={`/img/${item.image.substring(0, 40)}`}
                                                alt={item.name}
                                                className="w-100"
                                                height="300px"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{item.name}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                         */}


                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                            <div className="card h-100">
                                <Link to={`/catalog/1`}>
                                    <img
                                        src={`/img/taxeometr-category.webp`}
                                        className="w-100"
                                        height="300px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Тахеометры</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                            <div className="card h-100">
                                <Link to={`/catalog/2`}>
                                    <img
                                        src={`/img/gnss-category.webp`}
                                        className="w-100"
                                        height="300px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">GNSS приемники</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                            <div className="card h-100">
                                <Link to={`/catalog/3`}>
                                    <img
                                        src={`/img/nivelir-category.webp`}
                                        className="w-100"
                                        height="300px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Нивелиры</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                            <div className="card h-100">
                                <Link to={`/catalog/7`}>
                                    <img
                                        src={`/img/acsessuary-category.webp`}
                                        className="w-100"
                                        height="300px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Аксессуары</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog