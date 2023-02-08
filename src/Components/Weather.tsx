import { Box, Heading, Stack, Image, Grid, GridItem, Text, Tabs, TabList, TabPanels , Tab , TabPanel} from "@chakra-ui/react"
import { ChartComponents } from "./Chart"
import './style.css'


type weatherProps = {
    getWeatherDetail: any,
    singleDayDetail : any
}

const monthChange = (month: number) => {

    switch (month) {
        case 0: {
            return "01"
        }
        case 1: {
            return "02"
        }

        case 2: {
            return "03"
        }

        case 3: {
            return "04"
        }

        case 4: {
            return "05"
        }

        case 5: {
            return "06"
        }

        case 6: {
            return `07`
        }

        case 7: {
            return `08`
        }

        case 8: {
            return `09`
        }

        case 9: {
            return 10
        }

        case 10: {
            return 11
        }

        case 11: {
            return 12
        }

        default: {
            return month
        }

    }

}

const DayChange = (date: string) => {

    const new_date = new Date(date)
    const today_date = new_date.getDay()

    switch (today_date) {
        case 0: {
            return 'Mon'
        }

        case 1: {
            return 'Tue'
        }

        case 2: {
            return 'Wed'
        }

        case 3: {
            return 'Thu'
        }

        case 4: {
            return 'Fri'
        }

        case 5: {
            return 'Sat'
        }

        case 6: {
            return 'Sun'
        }
    }
}


export const Weather = (props: weatherProps) => {
    const { getWeatherDetail , singleDayDetail} = props;
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const t_date = date.getDate()

    const full_date: string = `${year}-${monthChange(month)}-${t_date}`


    return (
        <Box>
            <Box>
                <Tabs className="tabs-style">
                    <TabList>
                        {
                            getWeatherDetail && getWeatherDetail.data && getWeatherDetail.data.map((i: any, index: number) => (
                                <Tab _selected={{border : '2px solid blue', borderRadius :'10px' , py :'20px', bg : 'red.50'}} w='100%' h='100%' display={'flex'} flexDir='column'>
                                    <Heading textAlign={'center'} fontFamily={'monospace'} size='sm'>{DayChange(i.datetime)}</Heading>
                                    <Heading textAlign={'center'} color='gray.400' fontFamily={'monospace'} size='sm'>{i.datetime}</Heading>
                                    <Box p='3' m='1'>
                                        <Stack direction={'column'}>
                                            <Heading textAlign={'center'} fontFamily={'monospace'} size='sm'>{i.max_temp.toFixed(0)}° </Heading>
                                            <Heading textAlign={'center'} color='gray.400' fontFamily={'monospace'} size='sm'>{i.min_temp.toFixed(0)}°</Heading>
                                              
                                        </Stack>
                                        <Image display={'block'} ml='auto' mr='auto' src={`https://www.weatherbit.io/static/img/icons/${i.weather.icon}.png`} w='50%' />
                                    </Box>
                                    <Text textAlign={'center'}>{i.weather.description}</Text>
                                </Tab>
                            ))
                        }
                    </TabList>
                    <TabPanels>
                        {
                            getWeatherDetail && getWeatherDetail.data && getWeatherDetail.data.map((i : any) => <TabPanel>
                                <ChartComponents singleWeatherDetail={i} singleDayDetail={singleDayDetail} today_date={i.datetime}/>                               
                            </TabPanel>)
                        }
                    </TabPanels>
                </Tabs>
                <Grid templateColumns='repeat(7, 1fr)' gap='2'>

                </Grid>
            </Box>
        </Box>
    )
}

