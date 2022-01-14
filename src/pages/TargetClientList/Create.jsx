import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Stack,
    NumberInput,
    NumberInputField,
} from '@chakra-ui/react'
import {
    legislativeDistrictOptions,
    administrativeDistricts,
    barangayOptions
} from "../components/Constants";
import { Form, Field, Formik } from "formik";
import { useToast } from '@chakra-ui/react'
import { db } from '../../utils/init-firebase'
import {
    collection,
    addDoc
} from "firebase/firestore"
import Select from "../components/Fields/Select";
import { AddIcon } from '@chakra-ui/icons'




export default function Create() {


    async function createClient(values) {

        const usersCollectionRef = collection(db, "client");
        await addDoc(usersCollectionRef,
            {
            first: values.firstname,
            middle: values.middlename,
            last: values.lastname,
            administrativeDistrict: values.administrativeDistrict,
            legislativeDistrict: values.legislativeDistrict,
            barangay: values.barangay,
            age: values.age,
                FormTwoA:{
                    dateOfVisit: new Date(),
                    physicalExamination: {
                        dateOfDelivery: '',
                        attendant: '',
                        sex: '',
                        typeOfDelivery: '',
                        placeOfDelivery: '',
                        amtsl: {
                            steps: {
                                noOne: '',
                                noTwo: '',
                                noThree: ''
                            },
                            isProvided: ''
                        }
                    },
                    assessment: {
                        postPartumMother: {
                            dangerSigns: {

                                unconscious: '',
                                VaginalBleeding: {
                                    hrs: '',
                                    days: '',
                                    otherVisit: ''
                                },
                                severeAbdominalPain: '',
                                looksVeryIll: '',
                                severeHeadache: '',
                                severeDiffOfBreath: '',
                                severeVomiting: '',
                                postPartumDepression: '',
                            },
                            pelvicExamFindings: {
                                uterus: {
                                    contracted: '',
                                    relaxed: ''
                                },
                                vaginalBleeding: {
                                    profuse: '',
                                    moderate: '',
                                    scanty: ''
                                },
                                vaginalDischarge: {
                                    color: '',
                                    odor: ''
                                },
                                vaginalLaceration: {
                                    firstDegree: '',
                                    secondDegree: '',
                                    thirdDegree: '',
                                    lacerationSutured: ''
                                },
                                ifCs: '',
                            }
                        },
                        newborn: {
                            withPoorSuck: '',
                            ifBreathing: '',
                            severeChestIndrawing: '',
                            grunting: '',
                            convulsions: '',
                            floppyStiffExtremities: '',
                            temp: '',
                            severeJaundice: '',
                            bleedingFromUmbilicalStumpOrCut: '',
                            umbilicusDraining: '',
                            foulSmellingDischarge: '',
                            skinPostules: '',
                            essentialNewbornCare: {
                                one: '',
                                two: '',
                                three: '',
                                four: '',
                                earlyEncGiven: ''
                            },
                            breastFeeding: "",
                            otherEncGiven: {
                                vitKInjection: "",
                                eyePropylaxis: "",
                                newbornScreening: "",
                                others: ""
                            },
                            newbornScreeningDone: ""
                        }
                    },
                    supplementation: {
                        noOfTabletsGiven: {
                            no: '',
                            dateGiven: new Date()
                        },
                        vitaminA: {
                            no: '',
                            dateGiven: new Date()
                        }
                    },
                },
                FormTwoB:    {records: {
            row1: {
                date: new Date(),
                    complaints: '',
                    mncServicesGiven: '',
                    nameOfProviderAndSignature: '',
                    nextFollowUpSchedule: new Date()
            },
            row2: {
                date: new Date(),
                    complaints: '',
                    mncServicesGiven: '',
                    nameOfProviderAndSignature: '',
                    nextFollowUpSchedule: new Date()
            },
            row3: {
                date: new Date(),
                    complaints: '',
                    mncServicesGiven: '',
                    nameOfProviderAndSignature: '',
                    nextFollowUpSchedule: new Date()
            },
            row4: {
                date: new Date(),
                    complaints: '',
                    mncServicesGiven: '',
                    nameOfProviderAndSignature: '',
                    nextFollowUpSchedule: new Date()
            }
        }},
                FormOneA:{ familySerial: {
                        client: {
                            birthday:        new Date(),
                            highestEducation: '',
                            occupation: '',
                            addressStreet: '',
                            addressBarangay: '',
                            addressMunicipality: '',
                            addressProvince: '',
                        },
                        spouse: {
                            firstName: '',
                            middleName: '',
                            lastName: '',
                            birthday:        new Date(),
                            highestEducation: '',
                            occupation: ''
                        },
                        avgFamilyIncome: '',
                        noOfChildren: '',
                        birthPlan: ''
                    },
                    medicalHistory: {
                        reviewOfSystems: {
                            heent: [],
                            chestHeart: [],
                            abdomen: [],
                            genital: [],
                            extremeties: [],
                            skin: [],
                        },
                        familyHistory: '',
                        pastHealthHistory: '',
                        socialHistory: '',
                        obstericalHistory: {
                            historyOfPreviousDeliveries: '',
                            menstrualHistory: '',
                        },
                        familyPlanningHistory: {
                            previouslyUsedMethod: ''
                        }
                    },
                    physicalExamination: {
                        vitalSigns: {
                            bloodPressure: '',
                            weight: '',
                            height: '',
                            bmi: '',
                            pulseRate: ''
                        },
                        conjunctiva: '',
                        neck: '',
                        breast: '',
                        thorax: '',
                        abdomen: '',
                        vaginalExamination: '',
                        extremities: '',
                        toxoidVaccineStatus: '',
                        impressionDiagnosis: ''
                    }
                },
                FormOneB:{    records: {
                        row1: {
                            date:    new Date(),
                            complaints: '',
                            mncServicesGiven: '',
                            nameOfProviderAndSignature: '',
                            nextFollowUpSchedule:    new Date()
                        },
                        row2: {
                            date:    new Date(),
                            complaints: '',
                            mncServicesGiven: '',
                            nameOfProviderAndSignature: '',
                            nextFollowUpSchedule:    new Date()
                        },
                        row3: {
                            date:    new Date(),
                            complaints: '',
                            mncServicesGiven: '',
                            nameOfProviderAndSignature: '',
                            nextFollowUpSchedule:    new Date()
                        },
                        row4: {
                            date:    new Date(),
                            complaints: '',
                            mncServicesGiven: '',
                            nameOfProviderAndSignature: '',
                            nextFollowUpSchedule:    new Date()
                        }
                    },
                    abdominalExamFindings: {
                        firstTrimester: {
                            firstMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            },
                            secondMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            },
                            thirdMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''

                            }
                        },
                        secondTrimester: {
                            fourthMonth: {
                                date:    new Date(),
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            },
                            fifthMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            },
                            sixthMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            }
                        },
                        thirdTrimester: {
                            seventhMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            },
                            eightMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            },
                            ninethMonth: {
                                date:    new Date(),
                                fundicHeight: '',
                                fetalHeartTomes: '',
                                aog: '',
                                leopolds: '',
                                lOne: '',
                                lTwo: '',
                                lThree: '',
                                lFour: '',
                                uterineAcitivty: ''
                            }
                        },
                        remarks: {
                            date:    new Date(),
                            fundicHeight: '',
                            fetalHeartTomes: '',
                            aog: '',
                            leopolds: '',
                            lOne: '',
                            lTwo: '',
                            lThree: '',
                            lFour: '',
                            uterineAcitivty: ''
                        }
                    }},
                BirthPlan:{  attendantName: '',
                    deliveryLocation: '',
                    accredationStatus: '',
                    distanceFromResidence: '',
                    estimatedCost: '',
                    modeOfPayment: '',

                    availableTransportation: '',
                    bringer: {
                        Name: '',
                        Address: '',
                        Number: '',
                    },
                    companion: {
                        Name: '',
                        Relationship: '',
                        Address: '',
                        Number: '',
                    },
                    careTaker: {
                        Name: '',
                        Relationship: '',
                    },

                    bloodType: '',
                    donors: {
                        donorName1: '',
                        donorAddress1: '',
                        donorName2: '',
                        donorAddress2: ''
                    },
                    complicationReferral: {
                        name: '',
                        address: '',
                        number: ''
                    },

                    maternalHostpital: {
                        name: '',
                        address: '',
                    },
                    newbornHostpital: {
                        name: '',
                        address: '',
                    },
                    conforme: {
                        signature: '',
                        date:   new Date()
                    }}

        }
        );

    }



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()



    return (
        <>
            <Button ref={btnRef} colorScheme='green' onClick={onOpen}>
                {/* Add New Record */}<AddIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Add New Client
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Formik
                                initialValues={{

                                }}
                                onSubmit={(values, actions) => {
                                    createClient(values)

                                        .then(() => {
                                            toast({
                                                title: 'Success',
                                                description: 'User created successfully',
                                                status: 'success',
                                                duration: 9000,
                                                isClosable: true,
                                            })
                                            actions.setSubmitting(false)
                                            onClose()
                                        })
                                        .catch(err => {
                                            toast({
                                                title: 'Error',
                                                description: err.message,
                                                status: 'error',
                                                duration: 9000,
                                                isClosable: true,
                                            })
                                            actions.setSubmitting(false)
                                        })

                                }}
                            >
                                {(props) => (
                                    <Form>
                                        <Field name='firstname' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.firstname && form.touched.firstname}>
                                                    <FormLabel htmlFor='firstname'>First Name</FormLabel>
                                                    <Input {...field} id='firstname' placeholder='firstname' />
                                                    <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='middlename' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.middlename && form.touched.middlename}>
                                                    <FormLabel htmlFor='middlename'>Middle Name </FormLabel>
                                                    <Input {...field} id='middlename' placeholder='middlename' />
                                                    <FormErrorMessage>{form.errors.middlename}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='lastname' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                                                    <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                                                    <Input {...field} id='lastname' placeholder='lastname' />
                                                    <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Select
                                            label="Legislative District"
                                            name="legislativeDistrict"
                                            options={legislativeDistrictOptions}
                                        />

                                        <Select
                                            label="Administrative District"
                                            name="administrativeDistrict"
                                            options={administrativeDistricts}
                                        />

                                        <Select
                                            label="Barangay"
                                            name="barangay"
                                            options={barangayOptions}
                                        />

                                        <Field name='age' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.age && form.touched.age}>
                                                    <FormLabel htmlFor='firstname'>Age</FormLabel>
                                                    <NumberInput  >
                                                        <NumberInputField
                                                            {...field}
                                                            id='age'
                                                            placeholder='age'
                                                        />
                                                    </NumberInput>
                                                    <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Button
                                            mt={4}
                                            colorScheme='teal'
                                            isLoading={props.isSubmitting}
                                            type='submit'
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
