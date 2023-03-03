
import { nav_data } from "@/data/nav-data";
import { Box, Center, Circle, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";




const MotionSVG = motion( Circle );

export default function NavbarItem() {
	return ( <Box>
			{ nav_data.map( ( item ) => {
				const { id, label, link, isActive, icon } = item;

				return ( <Box
						key={ id }
						display="flex"
						alignItems="center"
						justifyContent="space-evenly"
						width="100%"
						height="100%"
						p={ 2 }
						my={ "1rem" }
						bg={ "red.500" }
						color={ "blue.800" }
					>
						<Box>
							<Link href={ link }>
								{ label }
								<MotionSVG
									animate={ { rotate : 360 } }
									transition={ {
										repeat : Infinity, duration : 5, ease : "linear"
									} }
									style={ { width : "20px", height : "20px" } }
								>
									{ icon }
								</MotionSVG>
							</Link>
						</Box>
					</Box> );
			} ) }
		</Box> );
}