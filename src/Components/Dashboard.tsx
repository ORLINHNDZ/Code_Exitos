import { Box } from "@chakra-ui/react"
import { SearchComponents } from "./SearchComponents"
import { Weather } from "./Weather"

export const WeatherDashboard = () => {
    return (
        <Box m='auto' w={[300, 600, 1200]} >
            <SearchComponents />
        </Box>
    )
}