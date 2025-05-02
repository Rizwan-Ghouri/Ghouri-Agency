import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function TextInput(props) {
    return(
        <>
        <Input className="w-full bg-white text-black font-bold p-2 m-3 rounded-md" type={props.types} size="large" placeholder={props.place} required prefix={<UserOutlined />} />
        {/* <Input className="w-full bg-white text-black font-bold p-2 m-3 rounded-xl"  type={props.types} size="large" placeholder={props.place} prefix={<UserOutlined />} /> */}
        </>
    )
}