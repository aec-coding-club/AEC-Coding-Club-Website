import React from "react";
import {BsCodeSlash, BsHeartFill} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';

const Winners = [
  {
    id: 1,
    img: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
    name: "Abir Pal",
    position: "1st",
    dept: "CSE",
    year: "2024",
    event: "Quiz",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGa43cPo70DYcZ847mc02nOf8y0r9nJ38WQ&usqp=CAU",
    name: "Pranay Gupta",
    position: "2nd",
    dept: "IT",
    year: "2024",
    event: "Quiz",
  },
  {
    id: 3,
    img: "https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912719/62358443-avatar-man-smiling-cartoon-male-person-user-vector-illustration.jpg",
    name: "Soumya Banerjee",
    position: "3rd",
    dept: "CSE",
    year: "2024",
    event: "Quiz",
  },
];

const IntroCardsData = [
  {
    icon: < BsCodeSlash />,
    title: 'Mission',
    desc : "Working towards the improvement of campus's coding culture by organizing regular coding classes,coding contests and geeky sessions." 
  },
  {
    icon: < FiUsers />,
    title: 'Vision',
    desc : "To grow as a strong community in the world of coding, to make impact in various fields and uphold the integrity of Asansol Engineering College as a technical institution." 
  },
  {
    icon: < BsHeartFill />,
    title: 'Value',
    desc : "We believe that helping each other is the only way. We take care and always look to get the best out of everyone." 
  },

]

export {Winners, IntroCardsData};
