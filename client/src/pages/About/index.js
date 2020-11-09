import React from "react";
import monica from "../../Assets/monica.png";
import laura from "../../Assets/laura.jpg";

function About() {
    return (
        <>

            <div>
                <img src={monica} alt="Monica's headshot" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo tortor, eleifend in volutpat nec, consequat suscipit tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis a turpis non tellus congue vestibulum. Duis mollis in risus at ultrices. Etiam est lectus, posuere non convallis eu, vulputate at lorem. Aliquam erat volutpat. Nam mi purus, iaculis sed molestie sagittis, elementum sed mauris. Integer eget ullamcorper diam. Donec elementum justo metus, non egestas nisl interdum dapibus. Nulla pretium, nunc non elementum fermentum, ante elit vehicula elit, vel sagittis arcu odio id augue. Integer ac magna vitae elit aliquam molestie.Suspendisse eu dui diam. Pellentesque bibendum quam et dictum consectetur. Praesent interdum convallis lorem in semper. Sed aliquam tellus non velit molestie rhoncus. Nullam scelerisque quam id varius consectetur. Pellentesque lacinia massa sit amet nibh pretium varius. Aliquam erat volutpat. Praesent scelerisque ipsum arcu, et efficitur turpis commodo et. Vivamus vestibulum ligula id faucsuscipit eget dui</p>
            </div>
            <div>
                <img src={laura} alt="laura's headshot" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo tortor, eleifend in volutpat nec, consequat suscipit tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis a turpis non tellus congue vestibulum. Duis mollis in risus at ultrices. Etiam est lectus, posuere non convallis eu, vulputate at lorem. Aliquam erat volutpat. Nam mi purus, iaculis sed molestie sagittis, elementum sed mauris. Integer eget ullamcorper diam. Donec elementum justo metus, non egestas nisl interdum dapibus. Nulla pretium, nunc non elementum fermentum, ante elit vehicula elit, vel sagittis arcu odio id augue. Integer ac magna vitae elit aliquam molestie.Suspendisse eu dui diam. Pellentesque bibendum quam et dictum consectetur. Praesent interdum convallis lorem in semper. Sed aliquam tellus non velit molestie rhoncus. Nullam scelerisque quam id varius consectetur. Pellentesque lacinia massa sit amet nibh pretium varius. Aliquam erat volutpat. Praesent scelerisque ipsum arcu, et efficitur turpis commodo et. Vivamus vestibulum ligula id faucibus convallis. Donec orci enim, ullamcorper vitae tempor ac, suscipit eget dui</p>
            </div>

        </>
    );
}

export default About;