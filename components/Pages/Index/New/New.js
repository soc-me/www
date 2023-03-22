import Image from "next/image";
import { NewContainer } from "./New.styled";
import createIcon from '@/public/createIcon.png';

const New = ({uploadToURL}) => {
    return (
        <NewContainer>
            <textarea name="" id="" placeholder="What's on your mind?"></textarea>
            {/* submit button with image and text */}
            <button type="submit">
                <div className="image center"><Image src={createIcon}/></div>
                {/* <span>Submit</span> */}
            </button>
        </NewContainer>
    );
}

export default New;