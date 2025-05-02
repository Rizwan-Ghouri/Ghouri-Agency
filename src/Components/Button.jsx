export default function Botton(props) {
    return(
        <>
            <button className="w-5/6 m-3 bg-yellow-300 text-black font-bold p-2 rounded-2xl" onClick={props.Click}>{props.lable}</button>
        </>
    )
}