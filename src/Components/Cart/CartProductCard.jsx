import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function CartProductCard({id,image,title,mrp,price,gender,quantity,handlequantity,removeitem,shortlist}){

  const handleMoveToShort=()=>{
    shortlist(id)
    removeitem(id)
  }
    return (
      <Center width={"100%"} height="auto" py={{base:"100",sm:"150",md:"50",lg:"6"}} >
        <Stack border={{base:"none",sm:"none",md:"1px solid gray",lg:"1px solid rgb(113,128,150)"}}
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%' }}
          height={{ sm: '476px', md: '300px' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          padding={4}
          pb={9}>
          <Flex flexDirection={"column"} flex={1} bg="white">
            <Image
              boxSize="100%"
              src={image}
              height="90%"
              mb={"10px"}
              width={{base:"100%",sm:"100%",lg:"50%"}}
            />
           <Box display="flex" gap={"60px"}>
           <Button 
            onClick={()=>removeitem(id)}
             backgroundColor={"white"} padding={"5px"} width={"80%"}><Text paddingRight={"5px"} textAlign={"left"}>REMOVE</Text><DeleteIcon />
            </Button>
            <Button  
             backgroundColor={"white"} padding={"5px"} width={"160%"}
             ><Text paddingRight={"5px"} textAlign={"left"} onClick={handleMoveToShort}>MOVE TO SHORTLIST</Text><StarIcon/></Button>
           </Box>
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'16px'} fontFamily={'body'}>
             {title}
            </Heading>
            <Text textDecorationLine={"line-through"} fontWeight={600} color={'gray.500'} size="md" mb={4}>
              MRP:-₹{mrp}
            </Text>
            <Text fontWeight={600} color={'black'} size="sm" mb={4}>
              Price:-₹{price}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
               Gender:-{gender}
            </Text>
            <Stack
              width={'auto'}
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
              isDisabled={quantity==1}
               onClick={()=>{
                handlequantity(-1,id)}}
                flex={1}
                fontSize={'lg'}
                _focus={{
                  bg: 'gray.200',
                }}>
                -
              </Button>
              <Text>{quantity}</Text>
              <Button
              onClick={()=>handlequantity(1,id)}
                flex={1}
                fontSize={'lg'}
                bg={'rgb(255,112,67)'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: '',
                }}
                _focus={{
                  bg: '',
                }}>
                +
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }