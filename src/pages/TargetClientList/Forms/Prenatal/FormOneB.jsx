import React from 'react'
import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    GridItem,
    HStack,
    ListItem,
    SimpleGrid,
    Spacer,
    Text,
    UnorderedList,
    useToast,
    VStack,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import FormHeading from '../../../components/Labels/FormHeading';
import DatePicker from '../../../components/Fields/DatePicker';
import Radio from '../../../components/Fields/Radio';
import Select from '../../../components/Fields/Select';
import Checkbox from '../../../components/Fields/Checkbox';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../utils/init-firebase";
import NumberField from "../../../components/Fields/NumberField";

export default function FormOneB({works}) {

    const initialValues = {

    ...works.FormOneB

    }

    const onSubmit = (values) => {
        console.log('Form data', values)
        updateUsers2(values)
    }

    async  function updateUsers2(values) {

        const userRef = doc(db, 'client', works.id);
        const newValues = JSON.parse(JSON.stringify(values))
        await  updateDoc(userRef,{
            FormOneB: newValues

        })
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>MNC Form 1 Side B</Button>

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                size='full'
                scrollBehavior='inside'
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>MNC Form 1 Side B</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    {/* <FormHeading text='MATERNAL CLIENT RECORD for Prenatal Care' /> */}
                                    <SimpleGrid

                                        spacing={4}
                                    >
                                        <Box
                                            borderWidth='1px'
                                            borderRadius='lg'
                                            padding={5}
                                        >
                                            <SimpleGrid spacingY={5}>
                                                <SimpleGrid columns={12} spacingX={3}>
                                                    <GridItem colSpan={2}>
                                                        <Center>
                                                            <FormLabel>
                                                                DATE
                                                            </FormLabel>
                                                        </Center>
                                                    </GridItem>
                                                    <GridItem colSpan={3}>
                                                        <UnorderedList>
                                                            <ListItem>Complaints/complication</ListItem>
                                                            <ListItem>Medical Observation</ListItem>
                                                            <ListItem>PE Findings including pelvic examination</ListItem>
                                                            <ListItem>laboratory</ListItem>
                                                            <ListItem>Other important comments</ListItem>
                                                        </UnorderedList>
                                                    </GridItem>
                                                    <GridItem colSpan={3}>
                                                        <Center>
                                                            <FormLabel>
                                                                MCN SERVICES GIVEN
                                                            </FormLabel>
                                                        </Center>
                                                    </GridItem>
                                                    <GridItem colSpan={2}>
                                                        <Center>
                                                            <FormLabel>
                                                                NAME OF PROVIDER AND SIGNATURE
                                                            </FormLabel>
                                                        </Center>
                                                    </GridItem>
                                                    <GridItem colSpan={2}>
                                                        <Center>
                                                            <FormLabel>
                                                                NEXT Follow-Up Schedule
                                                            </FormLabel>
                                                        </Center>
                                                    </GridItem>
                                                </SimpleGrid>
                                                <SimpleGrid columns={12} spacingX={3}>
                                                    <GridItem colSpan={2}>
                                                        <DatePicker label="" name="records.row1.date" />
                                                        <DatePicker label="" name="records.row2.date" />
                                                        <DatePicker label="" name="records.row3.date" />
                                                        <DatePicker label="" name="records.row4.date" />
                                                    </GridItem>
                                                    <GridItem colSpan={3}>
                                                        <TextField label="" name="records.row1.complaints" />
                                                        <TextField label="" name="records.row2.complaints" />
                                                        <TextField label="" name="records.row3.complaints" />
                                                        <TextField label="" name="records.row4.complaints" />
                                                    </GridItem>
                                                    <GridItem colSpan={3}>
                                                        <TextField label="" name="records.row1.mncServicesGiven" />
                                                        <TextField label="" name="records.row2.mncServicesGiven" />
                                                        <TextField label="" name="records.row3.mncServicesGiven" />
                                                        <TextField label="" name="records.row4.mncServicesGiven" />
                                                    </GridItem>
                                                    <GridItem colSpan={2}>
                                                        <TextField label="" name="records.row1.nameOfProviderAndSignature" />
                                                        <TextField label="" name="records.row2.nameOfProviderAndSignature" />
                                                        <TextField label="" name="records.row3.nameOfProviderAndSignature" />
                                                        <TextField label="" name="records.row4.nameOfProviderAndSignature" />
                                                    </GridItem>
                                                    <GridItem colSpan={2}>
                                                        <DatePicker label="" name="records.row1.nextFollowUpSchedule" />
                                                        <DatePicker label="" name="records.row2.nextFollowUpSchedule" />
                                                        <DatePicker label="" name="records.row3.nextFollowUpSchedule" />
                                                        <DatePicker label="" name="records.row4.nextFollowUpSchedule" />
                                                    </GridItem>
                                                </SimpleGrid>
                                            </SimpleGrid>
                                        </Box>
                                        <Box
                                            borderWidth='1px'
                                            borderRadius='lg'
                                            padding={5}
                                        >
                                            <SimpleGrid columns={2} spacing={3}>
                                                <GridItem>
                                                    <Box
                                                        borderRadius='lg'
                                                        borderWidth='1px'
                                                        padding={3}
                                                    >
                                                        <SimpleGrid columns={3} spacingX={2}>
                                                            <GridItem colSpan={3}>
                                                                <Center>
                                                                    <Text>
                                                                        1st Trimester
                                                                    </Text>
                                                                </Center>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            1st mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.firstMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            2nd mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.secondMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            3rd mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.firstTrimester.thirdMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                        </SimpleGrid>
                                                    </Box>
                                                </GridItem>
                                                <GridItem>
                                                    <Box
                                                        borderRadius='lg'
                                                        borderWidth='1px'
                                                        padding={3}
                                                    >
                                                        <SimpleGrid columns={3} spacingX={2}>
                                                            <GridItem colSpan={3}>
                                                                <Center>
                                                                    <Text>
                                                                        2nd Trimester
                                                                    </Text>
                                                                </Center>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            4th mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fourthMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            5th mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.fifthMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            6th mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.secondTrimester.sixthMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                        </SimpleGrid>
                                                    </Box>
                                                </GridItem>
                                                <GridItem>
                                                    <Box
                                                        borderRadius='lg'
                                                        borderWidth='1px'
                                                        padding={3}
                                                    >
                                                        <SimpleGrid columns={3} spacingX={2}>
                                                            <GridItem colSpan={3}>
                                                                <Center>
                                                                    <Text>
                                                                        3rd Trimester
                                                                    </Text>
                                                                </Center>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            7th mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.seventhMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            8th mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.eightMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <Center>
                                                                        <Text>
                                                                            9th mo
                                                                        </Text>
                                                                    </Center>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.thirdTrimester.ninethMonth.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                        </SimpleGrid>
                                                    </Box>
                                                </GridItem>
                                                <GridItem>
                                                    <Box
                                                        borderRadius='lg'
                                                        borderWidth='1px'
                                                        padding={3}
                                                    >
                                                        <SimpleGrid spacingX={2}>
                                                            <GridItem >
                                                                <Center>
                                                                    <Text mb={5}>
                                                                        Remarks
                                                                    </Text>
                                                                </Center>
                                                            </GridItem>
                                                            <GridItem>
                                                                <VStack spacing='3px'>
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.date"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.fundicHeight"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.fetalHeartTomes"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.aog"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.leopolds"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.lOne"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.lTwo"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.lThree"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.lFour"
                                                                    />
                                                                    <TextField
                                                                        label=""
                                                                        name="abdominalExamFindings.remarks.uterineAcitivty"
                                                                    />
                                                                </VStack>
                                                            </GridItem>
                                                        </SimpleGrid>
                                                    </Box>
                                                </GridItem>
                                            </SimpleGrid>
                                        </Box>
                                    </SimpleGrid>
                                </FormControl>

                            </ModalBody>
                            <ModalFooter>
                                <Button margin={5} type="submit" colorScheme='green'>Submit</Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Form>
                </Formik >
            </Modal>
        </>

    )
}
