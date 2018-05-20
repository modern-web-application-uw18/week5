import React from 'react';
import './Paginator.css';
import PropTypes from 'prop-types';


const paginator = (props) => {


        return (
            <nav aria-label="Page navigation">
                <ul className="pagination" style={{ opacity: 0.5 }}>

                    <li>
                        <a aria-label="Previous" onClick={(e) => props.paginatorHandler(e, "prev")}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    <li><a onClick={(e) => props.paginatorHandler(e, "inner", props.first)}>{props.first}</a></li>
                    <li><a onClick={(e) => props.paginatorHandler(e, "inner", props.second)}>{props.second}</a></li>
                    <li><a onClick={(e) => props.paginatorHandler(e, "inner", props.third)}>{props.third}</a></li>
                    <li><a onClick={(e) => props.paginatorHandler(e, "inner", props.fourth)}>{props.fourth}</a></li>
                    <li><a onClick={(e) => props.paginatorHandler(e, "inner", props.fifth)}>{props.fifth}</a></li>

                    <li>
                        <a aria-label="Next" onClick={(e) => props.paginatorHandler(e, "next")}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>


                </ul>
            </nav>
        )
    
}


paginator.propTypes = {
    pageCount: PropTypes.number,
    characterCount: PropTypes.number,
    paginatorHandler: PropTypes.func,
    first: PropTypes.number,
    second: PropTypes.number,
    third: PropTypes.number,
    fourth: PropTypes.number,
    fifth: PropTypes.number
}


export default paginator;
