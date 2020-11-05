import React, {useState} from 'react'
import {Col, Radio, Row} from "antd";

const Quiz = () => {

    const [currentQuiz, setCurrentQuiz] = useState(0)
    const [localPoints, setPoints] = useState(0)

    const questions = [
        {
            title: 'Когда закончилась вторая мировая война?',
            an1: '1955г',
            an2: '1945г',
            an3: '1912г',
            rightAnswer: '1945г'
        },
        {
            title: 'Столица России',
            an1: 'Новосибирск',
            an2: 'Санкт-петербург',
            an3: 'Москва',
            rightAnswer: 'Москва'
        },
        {
            title: 'Какого цвета небо',
            an1: 'Синего',
            an2: 'Зеленого',
            an3: 'Красного',
            rightAnswer: 'Синего'
        },
        {
            title: 'Когда празднуется хэллоуин?',
            an1: '31 октября',
            an2: '31 ноября',
            an3: '30 октября',
            rightAnswer: '31 октября'
        },
        {
            title: 'Сколько часов в одном дне?',
            an1: '24',
            an2: '22',
            an3: '23',
            rightAnswer: '24'
        },
        {
            title: 'Что дает корова?',
            an1: 'Молоко',
            an2: 'Спирт',
            an3: 'Воду',
            rightAnswer: 'Молоко'
        },
        {
            title: 'Самый популярный браузер',
            an1: 'Safari',
            an2: 'Google chrome',
            an3: 'Firefox',
            rightAnswer: 'Google chrome'
        },
        {
            title: 'Столица Узбекистана',
            an1: 'Самарканд',
            an2: 'Бухара',
            an3: 'Ташкент',
            rightAnswer: 'Ташкент'
        }
    ]

    const usersTablePoint = JSON.parse(localStorage.getItem('user'))

    const cQuiz = questions[currentQuiz]

    const handleAnswer = (e) => {
        if (cQuiz.rightAnswer === e) {
            setPoints(localPoints + 1)
        }
        setCurrentQuiz(currentQuiz + 1)
    }

    const handleEnd = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'))
        if (currentUser.length === 1) {
            currentUser[0].points = localPoints
        } else {
            currentUser[currentUser.length - 1].points = localPoints
        }
        localStorage.setItem('user', JSON.stringify(currentUser))
        return (
            <div className='final'>
                <h3>Спасибо что прошли викторину</h3>
                <p>Правильных ответов (соответсвтенно баллов): <b>{localPoints}</b></p>
            </div>
        )
    }

    return (
        <div className='Quiz'>
            <Row gutter={40}>
                <Col span={16}>
                    <h1>За правильный ответ вы получаете 1 балл</h1>
                    {
                        (questions.length - 1 < currentQuiz)
                            ?
                            handleEnd()
                            :
                            <div className='question'>
                                <h2>{cQuiz.title}</h2>
                                <div className='answers'>
                                    <Radio.Group buttonStyle="solid" onChange={e => handleAnswer(e.target.value)}>
                                        <Radio.Button value={cQuiz.an1}>{cQuiz.an1}</Radio.Button>
                                        <Radio.Button value={cQuiz.an2}>{cQuiz.an2}</Radio.Button>
                                        <Radio.Button value={cQuiz.an3}>{cQuiz.an3}</Radio.Button>
                                    </Radio.Group>
                                </div>
                            </div>
                    }
                </Col>
                <Col span={8}>
                    <h3>Таблица лидеров</h3>
                    <span>(если вы не набрали очков то вы не отображаетесь в таблице)</span>
                    <div className='tablePoints'>
                        {
                            usersTablePoint
                                ?
                                usersTablePoint.sort((a, b) => {
                                    if (a.points > b.points) {
                                        return -1;
                                    }
                                    if (a.points < b.points) {
                                        return 1;
                                    }
                                    return 0;
                                })
                                    .map(user => {
                                        if (user.points !== 0) {
                                            return (
                                                <div className='item'>
                                                    <span>{user.name}</span>
                                                    <span>баллов {user.points}</span>
                                                </div>
                                            )
                                        }
                                    })
                                :
                                <h3>Лидеров нет</h3>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Quiz