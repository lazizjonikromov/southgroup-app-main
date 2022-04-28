import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners';
import { API } from '../tools/constants';

const CatalogView = (props) => {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')

    const getCategory = async () => {
        await axios.get(API + `api/category/${props.match.params.id}`)
            .then((res) => {
                setCategory(res.data.products)
                setName(res.data.name)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        setLoading(true)
        getCategory()

        setTimeout(() => {
            setLoading(false)
        }, 1400)
    }, [])

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

            <div className="catalog-products">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h2><span>{name.substring(0, 1)}</span>{name.substring(1)}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {category?.map((item, index) => {
                            return (
                                <div className="col-lg-6 mt-5" key={index}>
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
                    </div>

                </div>
            </div>

        </>
    )
}

export default CatalogView

