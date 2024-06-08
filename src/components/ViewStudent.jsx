import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const [data, changeData] = useState(
        [
            { "name": "vishnu", "admno": 101, "RollNo": 1 },
            { "name": "sona", "admno": 102, "RollNo": 2 },
            { "name": "shaniba", "admno": 103, "RollNo": 3 }
        ]
    )
    return (
        <div>
            <Navbar />
            <center>
                <h2>STUDENTS</h2>npm 
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDxUPEA8PDw8PDw8PDw8PDxAQDxUPFREWFhUVFRUYHSggGBolGxUVITEhJykrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUuLy0tLS8tLSstLS0tKy0rKy0tLS0tNS0rLS0tLS0tLS0tLS0tLS0tKy0tKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABBEAACAQIEAwQGBwUHBQAAAAABAgADEQQSITEFE0EGIlFhFDJxgZGhByNCUrHB0WJykuHwJCVTgqLC8RUzRGOz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACwRAQACAgAFAgYABwAAAAAAAAABAgMRBBIhMUEyURMiYXHR8AUUI4GhscH/2gAMAwEAAhEDEQA/AOpRgRiO0JK0YjjgK0doCOAhCOEBQjhAUI4QgoRwhJRRwhBRSUIEYpKIwlAwtJWiMgQIitJGKBEyJk4iIEJEyZiIgVmIyRitArYSDCWkSDCBQ8pcT0PK3EDymEsKwgbEBHaOOSFHCO0BRxwgK0I4QFCOEBQjhAUI4oChHEYBCYXj/ajBYFb4isA1rrRUZqzX2sg29psPOaLX+mFc31eCJTe9Svlcj2BSAfeZGzTqUJzvhn0sYeobVcNVp7d5HWoAPFrhbTdOEccwuLF8PWWpYXKi4YDzU6xs095iMlaRtJETFJxQIRGSIhaQIWiIk4jArIkZZImBWZBpaRIMIFDStpawlRECq0JO0IGwQtGI7SQrQtHC0BRwjgKEcUAhCEBRwigEIQgIzSO3na18MPRsPb0hxq+/LB91r/hN0rNZSfAE6eycD4hjTieI1agWwNUqBa3dXQfhf3zi9tQ7x13KrD8ErYhizlmZiSzMSWL+JJ3mZxPYXKugJNthNt4LggAM25HSbHSw4Nuky88zLZ8OIhyKr2RrZbWItsB49T5zx08DXwlXm0WZHp6obXOm2nXUCdy/6crDXWa1x/hAvqPYwk88w55KyynYztIuPoFiMtakQlZfMjRh5HWZ8zlPACMLjkYMUNTNTqCwsy2uD7QbfGdVRgQCCCCLgja000tzQyXryzoRGSiM7coxRwkCNojJRGBEyJkzImBAiQaWESLQKWEpaXtKXgVmEcIGwCOAhJBCEIBCEIBCEIBCEIBFHCEFFJRQMfxrN6NVyNlblPY+eUzg/ZiiecWY6ZrXO2+pvO09tsXycFUezG5SmxXdUdgrt52UsbdTacOFR6S7q9JGbvEZi+t7kCwHTxlOXtpowR126twrEUmICVabHqFcEzZaTDxE4bhMfSYhsuVx3rqjIStr93a50vrYec2ng/bbDhMtWty2UHRg5J8LWBmfWvDX6vLq9PUTxcTphkIIvcGcmx/aitVZbVKlGm9il3IYgnQlbgC/hcmZbh3aGqFulVcRpfIXPeF9crZmUt4be2TPZEV6sNjsay8SoL0GJoLqP/aAD7Z2PB01UEAZSTcrfu36lZw7tDxCjUdcdTDaMr06JWzvVU31PRQQL+2d0oMGVWtoyhhffUXl+LsyZ/UtijiMuUoxGSMiYCiMlImQEYo4oCMraWGQaBS0qeXtKXgVwhCBsAhEI5IcIQgEIQgEUcIChCEIEIQgKBjigYTtnRZ+H4hVNv7PVJ0BvZCbeWtpyzhSUGPLrFQrhLBiF1yDQedxO2OoIsQCDoQdQR5zj/G8OmGx9SitPPTUplVwG0ZVPv3tKM0dNtXDT1097pgMOhJrnY2S6MzHwUAZmMn2L4LSrLiWr0VPpKsGUrdlW1lF+hAsb+MwFXHYd8yZqGGqajIiqjX8WsLmezs5jMersFq06i1N3uO755bjT4TO2MhgeFUqy8iqUXEYfLQqipTUioqCyVBsSGWx621mRPAMPhvrAlJqri1NURVZ2A0C9ffsBqdBK+M4Ko1Na1VaGIen6yqoAK+VybH3y3g2NwxXmUqaozd1rLZrjoSdZH3JjzCK8BpO9FGUEUEVDpodP5TfkUAADQAWA8pzOv2vFLEvSWkGZK1I5y2hC5S4t47j59J0jD1g6K66qyhlPkZpw+WLiJ7LYo4pezoxGMxGApEyRkTAJEyURgRMi0kZFoFTSlhLmlTSBURCMiEDPCOREckShFeEBwihAcUIQCEIQgQhFAcUIQCc/wDpF4W6VVxyLmUKKde3Sx7rH4gX6WE3+Yjtc+Xh+JN7H0aqoPmy5R8zObxuHeO01tEw5dxLD0alRMTkDA2cGwJDbMCDuPL85s/B6OAKD6jD3IcE5+WdQBsRp4+U0TgfGxTPLqjuk7dPd+k3PB1cE1iCATrobD+UydnpRMTD04zgWFrsPq0REJa1ItZjc6Fja41+U8VZ6GFps+ipTBY+4fPwE9uO41SVeXQGdjoSuvznPfpBasvIQsQtUVWZRot1KWHuzH8ZzEc1kXtqGNwGMao71G9Znaof8xzG3svO39hcbzcGmtyl0+H8iJxDhmHtZhbvAqR4NY7zqf0W1LLUS/dJzgfAH8vhLqT87Nkj5G/RGEU0spRR3igKIxxGAoozImAGQaMmRaBW0qaWtKmkCEIrxQM6DJCQEkJIcYigIDhCEAiMIQCEUIQcIQhIihAmEKMbjKdGm1aqwWnTUsxPh+s4rxL6QMTxGvVopalggthTCjOxDCxdjruCbCw0G82D6ROPGv8AU02HLDMqWIIqOO6W87G9um5mmcI4bkF7WLH8NBOMk6hpxYvMoVuH31AmQ4Rwm5BI0mRwtDvZSN9pncBRCG1plaez0cN4YqgaTBfSfgL4anUXelWBv5MCLfHLN0otpPDx2itZOQVzCotUt+yq02Ib+LLIiJ30RvfdyjBG6gjT7LD5qZv/ANFeJtXqUjuKdx7mE0DC3G/mrf1756+Cdpm4filrFOai3p1ALB8hIvbx6W/nOqepzkj5Zh9ARGeHgvF6GMoLiMO4em432IPVWB2IntmxhBijiMBRRmRMAMiYzItAjItJGQaBBpW0m8pYyAiYpEtCBnRJiQEkJIccUIDhFCAQhFAI4oQHI1aiqCzMFUalmIAHtJmM45xhcMoFs1SpfID6o/ac9B8zY+7lvEeMVMXUvVxFQqW7qqMqKL6WEiei/DhnJM+0N/4x25wlDRBUxDH1QgyoT+8enmARObdq+0uLxdVaTVClJiCaFM5Uy2uc3VjbTX5TxYkBsUctZgEIRr5th61rX+7f3zwDE/WVK1SoaiopGg2La3vb2i0stSYrtZiikX1ryzmEw1LE4VEdgtVMTUyA2DMCoaynYaBvhM3h8GeUpPrG2bTr1E5TialWtVFS5XICaYUkBFAvp4HS5M2zst2uqpXShinRqTkZqztlZLqbMTsdQAT8fGZ7xNo0tmaxuda/Hhu9TAkFWA2OszZwdwD5CXYOkG3sVIuCNR5T35Ba3hM+kbeIUbLPCi61KjDamwTy0y+6+cfCerj+PFCgzm3dU2BOW7W0F+l5r3Du1eGxdGo6jltnpI1P7SAZrZh4WC94aaeOkspHSZh1jjd67jpMtK41hMj1gOj5l/zAH8bzVMVULH2jT4afKb32iW5qnfuXUjbRb3+c0tsMe6SNz8r3/wBy/PwldJ93fFViLzEMp2D4nVw9bKtWpSDnKpQ93mG1sy7EdNQZ13CdqqtKy4qmHH+NRFveyfp8JxcUioVk0ZTzAf2gwy/MCdLxGKrZ1AyMr5WVjbYqSBNFck6c4cFL7izoWCx1Ksuek6up1uD+UvmiYg8hzUpn0ZqIp81VH1VRmAvodm9byOWx3vNr4RxJcRTzLbMpyuBte248jLZ6dJYrY+k2r2e6Ix3ikKiMiZKRMkQMiYzImQK3lDS5zKHgVkwkCPP8YQNhvJKZWJK8kWXheREcBwiheA7xRXheAXjkYxA5n2rx4fHVvtLRUUgvTOKTE/MtMfgcrKrKEII07gImGxeOvjaz6lWr83N4qKh39quZ7ezbWLUyLqtV1BLKLpfTQnwIlOSJnWntcLNKVtE99R/p5q9OmatZ+WCRzDcX/wAPwniweARqDOVFi5AGttDp8jPVhmPKrAq5cXscpOYFu6wI8gw9ol+AFsIosRmJfWy6++XZeaKOMMYpywnhOFoMwKIPqGX1RuxVb/Oa/jezq3U2IYE06ig2AfRh7LqbzdnB5dRgp7qJ1Ujck6g/siYrjuIAxDNY5a4Rl0uObSIU2t1K2+EqpzViJ+q7LXHky3j2iPyyf0ZY96OIPDq2d6bBjhb3LoQvM5d76qUOYeGU+M6vSwq/d9x1M5HQqilXwuLAtkr0g5sQT3wr/wChiJ2VfOWzTXeHlZ9Vn5Z6OM/SLxDG0+INUpZadOgDh6QcZk71NWaoo+939+mUTVKHZ56eKo8qvkdwGLqCVC5LtcEajTa06N2y4OmKxr02YU2fKVZ2sljSAAtbU/VmYvhtGm1SnlC90csupuGu+W4PUWXT2znLNYr07tXC45tbr201zG1M9xk5eYWYHYm5BYfskAEe2Y6rSuWa3dQBE8zrf5n8Jlu0wy1wOikg2/Z0/IzwNchQRbZz5H7IA62/rpMtulpLTvuhTp3CoRuQWt+ypIHym1VaSCpRqB2FNaStl39RM1veLiYXBYYtzLaFUXKLdRY/heZTBvnWmndKsGp26g5sm/sIMsruKxMe7RgpWebftLP2qVMtNwpJD4lswuKgzd1VPUWDHXw89PbwzFrRxoUaJiMqhb7FgSo+OkwWHxDrVBBslFxkJ1PKAsBb7OhtqZ6eOdxeZTP/AGnVw1ydEqLVXXS+l/LSXR8880+6q9PhUjFHXcf5jq6FFeF7xGS8oSJMJEyRFpBjJEytpAgxlDGWsZQ8CJikf68YQM+JMSlWkwZItELyAMleA7wMjeEB3heRvC8CV5CtUCqWOyqzH2AXMd5i+1Z/u/FWNj6HibEbg8ltYTHdwjGVSq5tM2VQfaChtMx2ZxRbmMWNyjEWY2JVAQfM6TX8bigaRLAg81QSNeh0t7p7ezdbKjFb2sw18xb85XqYr/d6vPS2T7Q9RuaDNccxSTTJCagliVNx4ATMYRRyKQ1F1t90gnWxtb2TC16ZFFVI/wC53QTa1ytvzmxVKZ5aC65kRRq25UdZ1xFrcqzhK4/ibZVqf9mqak3KqL2J0Rj1mvYtc1CojEnlu9iQNCpOs2vDU82HQrY8zErsb92wU/jNexVElsXTsbrVqlbb6gn9ZVNrRSq3FGO2fIiatT0IkMO6CR3ba5bj1SPCdqw75kVvvKrfEXnC6AqejW1yta62Ob1W1t4bfxCdi4TiS2DoMd2w1Anfc01vNVrTbu8ricdaxHK0v6TmD1MqrduXSVj4m9Uj22udvGYjBNko0WJy2XNoGBOVtLXX8p6+1bh6tQsdlVuttDbb/NMZwUD0emALXQ9LbsTKstqxTt1buCx3tMdemnk+kLC2qcxA1s1762ynvX186nh0mH4YhNS7HNYaX2Gun4/KdA4xgRiKSrcA1cPkBP3grfmFmj4JeXTOYZSbjzuF290z57b6+6iuLk3G+0vbwmsBVK5QxfPa+T1mWwAuDJUauTPVsFVKiLowItVIVjZVH3ZTwtgmR23YsRfxDXH5/CePtBXRGqqlwvMpKQdAcrM3+0zTS39KIWRjis82/wB02A2DWYgnwawA9g2EyeOrI9ALdSHRVbXqA66+600vEcQV7EP6yhi27m+5A6D2/CZUYq+GRaQJ5bHMzDUF2qWt49ZRWLbltyZMfLXXv/x1jAVg9Gm4+3Spt8VBl154Oz5/slHr9TTB9oXX53nuM0S+dnuDImBkSZARMqYyRkGMCtzKGlrmVNAhCIxwhl1aWq08iPLVaSl6AZIGUBpINAtvFeQvC8CV4XkbwvAkTMT2uueH4kDrhqw9xQg/K8yd55OMoGwtZTs2HrA+w0zEpr3h848RDikNMwFQi4HXX9ZbwkZqT3bKcu2vkfwlWOYhDrpnBt7f+I8Ay8qoTe5QgWPkP0MiLdIbL45reXuakDSpKal7ubet0FO34mbLWpUi5vUbXyvr8ZrdLlsaAsxBYdQdc3/E2UU6Vr8sHe+9/wAZOe8L+BxWm0/vszvCqSGlh1FTL3qp1uCWFYHpfoswOIo1BXqstX16fMuHAvuDv7pnOH4eiwpp3lOtRCDaxbMQfipmvjDo9MnOyuqOpU7aja5P5Tm96zFXXD4rRfJOvP5Rwz4gYYqQx71PvFbj1WvOt8FY/wDT8Nff0TD5umvKW+k47Qwz+jN9dSten96+gPlOtdmn/u3CgkMRg8MCw2NqK6iackxro8y8T5alx+rSp1WqVlZ6SqrVEU2ZlFRbjf8ArynjqYmhTeykollKU9CyoRcDfcDTeR7cUwzP3gtqTaEkXu6+A1mHxlWihDi7E06e5sNtfb8pnyY4msS9Dgs01nX0bLiuLocKjKhJp1WW58NH2PkLe+aswLuSRYCygdLt3j8vyntoY81MNVRUAyNSdbD7xyk3Ou08dXEl3sNXbQLf1Vt189vlKM2uWNInfxbQWLxDLSpEKDmr1Cu+xAt8yZhO0eLFR3z2CtUJsOoXbf8AePxmy4qnWy0gDZPSFAAcbHymvcSz8rNVszszOGuCbFihH+kGaseoxwpyRabzV6afKUJkpse4ml7ksR5CbE1GsuHKAZA60mOthrYnT+KYpBl7gA7tlPTUC3w/WZvE1T6OOt6VI/Biv5yj4nWW+3DzEY9z5bz2LYnh9Ek30q6+XOe0zJM1z6PaxbhtInfNiB7hiKgmxEy2XjXjVpIyJjJkGkOUWMqYybGVNCEWlTmTYylzCSvCRvCB7FqS5akISRYryYaEIQnmjvCEAzREwhAWaU48/U1L6jlVL/wGEITD5rrIWQ2YHuhjfxHuHjLuDIMlQMLXp1CNBoQt4QkTEabYtPxXq4aDnog/vf6ps4JNM+TOPmf1ihKuIel/DvLK8LqAWHT0Zm+VQ/rMLTfuPfU8si/XRTCErv4XcP3v93iosRQNhcMyXv0ORiLa9bH4Tq3Zep/duF1/8TD/APzEITW8ji/TDVO01NHqtnvblHY2+2p/KYqhRpNhUZUu1Nmphmtm01Jv138IQleW08jRwOOszWf3uowANTnKTlC00ay6C4aUYscv1b5uXSYt1ynp79Y4TPPpborH8xMfR7cW7GipBvkqZ+v2UYiatxbEWdKZ0y0aJPXvFy5/GEJoxRusQx8XPLkmYZtw5LPkJBffMu1+gmUqFvR1Bsv1ZBF7mwrjXwhCIpETJfNe1abnzDd/o/olOG0gftNXcfutXqMPkRNhJhCdPIv6pRJkGMIQ5VsZUTCECtzKWhCEoQhCB//Z" height="200px" class="card-img-top" alt="...">
                                            </img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">Admno:{value.admno}</p>
                                                <p class="card-text">Rollno:{value.RollNo}</p>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent