import TitleItem from './TitleItem';

function TitleList(props) {
    return ( 
        <ul>
            {props.titles.map((item) => (
                <TitleItem
                    id={item.id}
                />
            ))}
        </ul>
     );
}

export default TitleList;