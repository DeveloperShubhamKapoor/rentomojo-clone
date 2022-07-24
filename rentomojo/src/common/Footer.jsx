import React from 'react'
import styles from "../styles/homepage.module.css"
import { Button, Icon } from '@chakra-ui/react'
import { TbBrandTelegram } from 'react-icons/tb'
import { FaFacebookF } from 'react-icons/fa'



const Footer = () => {
  return (
    <div>
        <div className={styles.footer_container}>
            <div className={styles.footer_text_container}>
                <h3 style={{color:"#747474",fontWeight:"bold"}}>Choose RentoMojo In Delhi And Enjoy Massive Savings</h3>
                <p className={styles.footer_text_set}> 
                    RentoMojo is a top-rated Indian rental brand, with an established presence across several major cities, including the capital: Delhi! When you purchase furniture, appliances, and electronics from a store, you spend a great deal of money. You can rent the same furniture, appliance, or electronics item from us for a fraction of the retail price.
                </p>
                <br />
                <p className={styles.footer_text_set}>
                    Our inventory includes products made by the best, most reputable brands in the market. Every product undergoes strict quality control checks and is in mint condition. You can rent from us for short term or long term. We have something for every need and budget.
                </p>
                <br />
                <p className={styles.footer_text_set}>
                    When you sign up for any plan, you receive many benefits from us such as free relocation, free maintenance, and damage waiver. You can rent from us online in a matter of minutes. As soon as we receive your order, we will deliver it to your location in Delhi. We offer fast, free delivery all over the capital, including localities such as Nehru Place, Greater Kailash, Hauz Khas, Tilak Nagar, Moti Bagh, and RK Puram.
                </p>
            </div>
            <div className={styles.footer_tail_details}>
                <div>
                    <h2 className={styles.font_bold}>RENTOMOJO</h2>
                    <ul className={styles.list_items_set}>
                        <li>About Us</li>
                        <li>Culture</li>
                        <li>Investors</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Our Benefits</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div>
                    <h2>Information</h2>
                    <ul className={styles.list_items_set}>
                        <li>Blog</li>
                        <li>FAQs</li>
                        <li>Document Required</li>
                    </ul>
                </div>
                <div>
                    <h2>Policies</h2>
                    <ul className={styles.list_items_set}>
                        <li>Shipping Policy</li>
                        <li>Cancellation & Return</li>
                        <li>Privacy Policy</li>
                        <li>Rental Terms & Conditions</li>
                        <li>Referral Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <h3>Need Help ?</h3>
                    <button style={{display:"block"}}>Chat with us(9AM - 6PM)</button>
                    <span>
                        <Icon as={TbBrandTelegram} />
                        <a href="mailto:jo@rentomojo.com">jo@rentomojo.com</a>
                    </span>
                    <h2>DOWNLOAD APP</h2>
                    <span>
                    <img className={styles.btn_play_store} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcSL9Hchb8ktcU8qGob7slubdbvpmAEFTtu3zwfP4wJ_Yv-DC9MtmUzEpM9-LSmpahA&usqp=CAU" alt="google play" />
                    <img className={styles.btn_play_store} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="app store" />
                    </span>
                </div>
            </div>
            <hr className={styles.horizontal_line} />
            {/* <div className={styles.footer_icons_container}>
                <div>
                    <p>
                    © 2022. Edunetwork Pvt. Ltd.
                    </p>
                </div>
                <div>
                    <a className={styles.icon_set_facebook} href=""></a>
                    <Icon className={styles.rento_icons} as={FaFacebookF} />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Footer