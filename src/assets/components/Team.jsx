import React from 'react'
import Title from './Title'
import TeamCard from './TeamCard'

let teamArr = [
    {
        name: "isabell diaz",
        designation: "development strategist",
        profile: "https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-f-1.webp",
        intro: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
        name: "david kim",
        designation: "product lead",
        profile: "https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-1.webp",
        intro: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    },
    {
        name: "ealoner vance",
        designation: "operation manager",
        profile: "https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-f-3.webp",
        intro: "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
    },
    {
        name: "olivia chen",
        designation: "research analyst",
        profile: "https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-f-2.webp",
        intro: "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
    },
    {
        name: "william anderson",
        designation: "CTO",
        profile: "https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-6.webp",
        intro: "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
    {
        name: "brian doe",
        designation: "marketing",
        profile: "https://bootstrapmade.com/content/demo/Strategy/assets/img/person/person-m-12.webp",
        intro: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velitf",
    },
]

const Team = () => {
    return (
        <section className='py-100 bg-blue'>
            <div className="container">
                <div>
                    <Title baseTitle="Team" mainTitle="check our team" />
                    <div className="row gy-4 mt-5">
                        {teamArr.map((member, idx) => <TeamCard key={idx} name={member.name} post={member.designation} img={member.profile} intro={member.intro} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team