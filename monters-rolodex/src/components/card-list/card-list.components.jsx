import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.components'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.monters.map(monter => (
                    <Card key={monter.id} monter={monter}></Card>
                ))
            }
        </div>
    ) //hiển thị đoạn truyền ở giữa components
}