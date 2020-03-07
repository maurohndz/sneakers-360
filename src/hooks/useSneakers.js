import {useState, useEffect} from 'react';

export const useSneakers = () => {
    const [sneakers, setSneakers] = useState([]);
    const data = [
        {
            shoe: 'Yeezy Boost 350 V2 Earth',
            brand: 'adidas',
            description: 'Yeezy delivers a new rendition of its most popular design with the adidas Yeezy 350 Earth, now available on StockX. This 350 V2 strays from newer releases by bringing back a heel tab that is present in early 350 silhouettes. This model was released as a regional exclusive specific to the Americas. This Yeezy 350 V2 Earth is composed of a mud Primeknit upper with a translucent outer side stripe. A mud colored Boost cushioned sole and mud interior completes the design. These sneakers released in February of 2020 and retailed for $220.',
            url_img: `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Earth/Images/adidas-Yeezy-Boost-350-V2-Earth/Lv2/img:index.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1581716639`
        },
        {
            shoe: 'Air Max 1/97 Sean Wotherspoon',
            brand: 'Nike',
            description: 'The Air Max 97/1 Sean Wotherspoon is a perfect example of what Kevin Garnett was talking about when he yelled that “ANYTHING IS POSSIBLEEE!!” This ultra-special Nike Air Max 97/1 was originally part of a Nike design contest that Sean entered and ended up winning. Reportedly inspired by Sean’s love for vintage Nike hats from the 1980s, this shoe features both the upper of the Air Max 97 and the sole unit of the Air Max 1, a killer combo. The shoe also has a unique colorful corduroy upper with frayed edges, a truly one-of-a-kind look, with velour from toe to heel. These grails dropped on Air Max day 2018 (March 26th) and retailed at $160. If you’re an Air Max fan, these are a pair that is a must have in your collection and one that will be sure to turn heads. This no accessories version comes with an extra lace set only.',
            url_img: `https://stockx-360.imgix.net/Nike-Air-Max-1-97-Sean-Wotherspoon-NA/Images/Nike-Air-Max-1-97-Sean-Wotherspoon-NA/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000`
        },
        {
            shoe: 'Ultra Boost 4.0 Game of Thrones House Stark',
            brand: 'adidas',
            description: 'Fill your house with sneakers and cop the new adidas Ultra Boost 4.0 Game of Thrones House Stark. This Ultra boost 4.0 comes with a grey upper plus black accents, three black adidas stripes, black midsole, and a black sole. These sneakers released in March 2019 and retailed for $180.',
            url_img: `https://stockx-360.imgix.net/adidas-Ultra-Boost-4-Game-of-Thrones-House-Stark/Images/adidas-Ultra-Boost-4-Game-of-Thrones-House-Stark/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1554052550&w=1000`
        },
        {
            shoe: 'Air Presto Off-White White (2018)',
            brand: 'Nike',
            description: 'After the release of his critically-acclaimed "The Ten" project with Nike, Virgil Abloh is back again with another iteration of the Nike Air Presto Off-White. Continuing with the deconstructed and industrial vibe, this pair features a monochromatic white colorway. In addition, there is a grey Nike Swoosh (with orange detailing) stitched onto the side panel, "AIR" written on the lateral side of the heel in black, and a white Nike tag on the tongue. Sure to be one of the hottest shoes of 2018, this pair dropped in June 2018 for a retail price of $160.',
            url_img: `https://stockx-360.imgix.net/Nike-Air-Presto-Off-White-White-2018/Images/Nike-Air-Presto-Off-White-White-2018/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000`
        },
        {
            shoe: 'Yeezy 500 Stone',
            brand: 'adidas',
            description: 'Yeezy added new materials to a fan favorite with the adidas Yeezy 500 Stone, now available on StockX. Following the Bone White and Soft Vision releases, Yeezy is staying true to its pallette with the Stone 500s. The materials that comprise this model is where the difference lies. Yeezy replaces mesh with neoprene to add a twist to this popular design. This Yeezy 500 is composed of a Stone neoprene and suede with reflective piping. A matching Adiprene midsole and Gum rubber outsole completes the design. These sneakers released in November of 2019 and retailed for $200.',
            url_img: `https://stockx-360.imgix.net/adidas-Yeezy-500-Stone/Images/adidas-Yeezy-500-Stone/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1575330093&w=1000`
        },
        {
            shoe: 'NMD XR1 OG Black',
            brand: 'adidas',
            description: '',
            url_img: `https://stockx-360.imgix.net/Adidas-NMD-XR1-OG-Black/Images/Adidas-NMD-XR1-OG-Black/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1543952710&w=1000`
        },
        {
            shoe: 'Air Max 90 Be True (2019)',
            brand: 'Nike',
            description: 'Become a true sneakerhead and cop the new Air Max 90 Be True (2019). This AM 90 comes with a with a white upper plus grey and multi-colored accents, multi-colored Nike “Swoosh”, white midsole plus multi-colored accents, and a white sole. These sneakers released in June 2019 and retailed for $130. Place a Bid for these proud kicks today.',
            url_img: `https://stockx-360.imgix.net/Nike-Air-Max-90-Be-True-2019/Images/Nike-Air-Max-90-Be-True-2019/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1560199460&w=1000`
        },
        {
            shoe: 'Air Max 720 Be True (2019)',
            brand: 'Nike',
            description: 'Stay true to the sneaker game and buy the Air Max 720 Be True (2019). This AM 720 comes with a multi-colored upper plus black accents, black Nike “Swoosh”, translucent midsole, and a translucent sole. These sneakers released in June 2019 and retailed for $190.',
            url_img: `https://stockx-360.imgix.net/Nike-Air-Max-720-Pride-2019/Images/Nike-Air-Max-720-Pride-2019/Lv2/img:index.jpg?auto=format,compress&q=90&updated_at=1560887819&w=1000`
        }
    ]

    useEffect(()=>{
        setSneakers(data)
    }, [])

    return sneakers;
}