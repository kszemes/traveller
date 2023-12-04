import React from 'react';
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import './About.css'

export const About = () => {
    return (
        <div className='about-container'>
            <div className='holder'>
                <h3>About Us</h3>
                <div className='about-section'>
                    <img src={about1} alt='About1'/>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda dolores doloribus enim, iusto maiores molestias officiis repellendus sit veritatis! Aut eos iure nesciunt, nostrum nulla repellat unde? Consequuntur, laborum.</span><span>Dicta earum ipsa iure neque nostrum odit optio quas sapiente. Aliquam, animi at culpa debitis dolorem dolorum, facilis fugiat fugit impedit laboriosam nam nisi quas quidem quisquam, repellendus sed sunt.</span><span>A alias aliquam architecto aspernatur atque consequuntur, dicta dolor ea est exercitationem fuga inventore, itaque, minima minus natus nemo nostrum numquam odit perferendis porro quos sapiente sequi voluptas. Odio, quidem?</span><span>Ab aperiam assumenda at commodi enim quis sequi temporibus voluptatibus. Amet corporis, deserunt dicta dolor earum est fugiat id nemo provident quae sit veniam voluptatem? Aliquam autem blanditiis consectetur voluptatum.</span><span>Architecto aut commodi consequuntur cupiditate dolor dolorum eligendi est excepturi hic itaque maxime nemo, perspiciatis possimus quam quia repudiandae sequi sit unde voluptatibus voluptatum! Aliquid commodi culpa molestiae totam vitae?</span></p>
                </div>
                <div className='about-section'>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam asperiores consequatur dignissimos dolor est eum, expedita explicabo fuga incidunt inventore itaque laudantium molestias obcaecati quidem quisquam repellat, soluta, veritatis?</span><span>Assumenda aut et hic libero nihil nobis possimus provident sint! Animi, asperiores aspernatur delectus doloremque enim facere itaque laborum minus, optio qui quibusdam quos rem repellendus similique tenetur vitae voluptatibus.</span><span>Animi aperiam aspernatur commodi consequatur deleniti deserunt eaque eos expedita facilis magni nemo neque nostrum optio pariatur possimus quasi quibusdam quisquam repudiandae similique sint sunt tenetur totam, ullam voluptatem voluptates.</span><span>Ab accusamus architecto consectetur corporis cum deleniti doloribus dolorum ducimus eos explicabo, illum, libero maiores nemo nihil odit officia quas rem repudiandae soluta ut vel, velit veniam veritatis vero voluptatem.</span><span>Animi assumenda blanditiis, cum dignissimos dolorem doloribus dolorum eligendi enim iure libero molestiae nam nemo neque, nihil non quae quas! Autem consectetur eaque eligendi exercitationem laudantium magnam qui sunt vitae.</span></p>
                    <img src={about2} alt='About2'/>
                </div>
            </div>
        </div>
    );
};
