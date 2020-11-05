import React from 'react'
import {Button, Form, Input} from "antd";
import './FormName.css'
import {connect} from "react-redux";
import {getUser} from "../../redux/actions/getUser.action";

const FormName = ({getUser}) => {

    const [form] = Form.useForm()

    const handleSubmit = (e) => {

        getUser(e.name)

        const users = JSON.parse(localStorage.getItem('user'))

        const userOnce = [{name: e.name, points: 0}]
        const defaultUser = {name: e.name, points: 0}

        if (users){
            const localUser = [
                ...users,
                defaultUser
            ]
            localStorage.setItem('user', JSON.stringify(localUser))
        }
        else{
            localStorage.setItem('user', JSON.stringify(userOnce))
        }
    }

    return(
        <div className='FormName'>
            <h1>Добро пожаловать на викторину!</h1>
            <h4>Давай познакомимся, как тебя зовут?</h4>
            <Form form={form} onFinish={(e) => handleSubmit(e)}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Обязательное поле'
                        },
                    ]}
                >
                    <Input placeholder='Имя'/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapDispatchToProps = {
    getUser
}

export default connect(null, mapDispatchToProps)(FormName)