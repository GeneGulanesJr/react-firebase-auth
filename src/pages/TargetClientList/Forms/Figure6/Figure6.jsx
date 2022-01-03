import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    GridItem,
    HStack,
    SimpleGrid,
    Spacer,
    useToast
} from '@chakra-ui/react';
import React, { useState } from 'react'
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import TextField from '../../../components/Fields/TextField';
import TextArea from '../../../components/Fields/TextArea';
import Radio from '../../../components/Fields/Radio';
import FormHeading from '../../../components/Labels/FormHeading';
import DatePicker from '../../../components/Fields/DatePicker';
import DateTimePicker from '../../../components/Fields/DateTimePicker';
import Checkbox from '../../../components/Fields/Checkbox';
import SubHeading from '../../../components/Labels/SubHeading'
import NumberField from '../../../components/Fields/NumberField'
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../../../utils/init-firebase";

export default function Figure6({works}) {

    const data7 = JSON.parse(JSON.stringify({works}))


     const dateRegis =     data7.works.Figure6.dateOfRegistration.seconds
     const newdateRegis = new Date(dateRegis*1000)


    const datelmp =     data7.works.Figure6.lmp.lmp.seconds
    const newdatelmp = new Date(datelmp*1000)

    const dategp = data7.works.Figure6.lmp.gp.seconds
    const newdatedategp = new Date(dategp*1000)

    const dateedc = data7.works.Figure6.edc.seconds
    const newdatedatedateedc = new Date(dateedc*1000)

    const datefirstTri = data7.works.Figure6.datesOfPrenatalCheckUps.firstTri.seconds
    const newdatedatedatefirstTri = new Date(datefirstTri*1000)

    const datesecondTri = data7.works.Figure6.datesOfPrenatalCheckUps.firstTri.seconds
    const newdatedatedatesecondTri = new Date(datesecondTri*1000)

    const datethirdTri = data7.works.Figure6.datesOfPrenatalCheckUps.firstTri.seconds
    const newdatedatedatethirdTri = new Date(datethirdTri*1000)

    const datetd1 = data7.works.Figure6.immunizationStatus.tetanusDiptheria.td1.seconds
    const newdatetd1 = new Date(datetd1*1000)

    const datetd2 = data7.works.Figure6.immunizationStatus.tetanusDiptheria.td2.seconds
    const newdatetd2 = new Date(datetd2*1000)

    const datetd3 = data7.works.Figure6.immunizationStatus.tetanusDiptheria.td3.seconds
    const newdatetd3 = new Date(datetd3*1000)

    const datetd4 = data7.works.Figure6.immunizationStatus.tetanusDiptheria.td4.seconds
    const newdatetd4 = new Date(datetd4*1000)

    const datetd5 = data7.works.Figure6.immunizationStatus.tetanusDiptheria.td5.seconds
    const newdatetd5 = new Date(datetd5*1000)

    const datefirst = data7.works.Figure6.micronutrientSupplementation1.ironSulfate.firstVisit.date.seconds
    const newdatefirst = new Date(datefirst*1000)

    const datesecond = data7.works.Figure6.micronutrientSupplementation1.ironSulfate.secondVisit.date.seconds
    const newdatesecond = new Date(datesecond*1000)

    const datethird = data7.works.Figure6.micronutrientSupplementation1.ironSulfate.thirdVisit.date.seconds
    const newdatethird = new Date(datethird*1000)

    const datefourth = data7.works.Figure6.micronutrientSupplementation1.ironSulfate.fourthVisit.date.seconds
    const newdatefourth  = new Date(datefourth*1000)

    const cal2nd = data7.works.Figure6.micronutrientSupplementation1.calciumCarbonate.secondVisit.date.seconds
    const newcal2nd =new Date(cal2nd*1000)

    const cal3rd = data7.works.Figure6.micronutrientSupplementation1.calciumCarbonate.secondVisit.date.seconds
    const newcal3rd =new Date(cal3rd*1000)

    const cal4th = data7.works.Figure6.micronutrientSupplementation1.calciumCarbonate.secondVisit.date.seconds
    const newcal4th =new Date(cal4th*1000)

    const deworm = data7.works.Figure6.dewormingTablet.seconds
    const newdeworm =new Date(deworm*1000)

    const syp = data7.works.Figure6.infectiousDiseaseSurveillance.syphilisScreening.date.seconds
    const newsyp =new Date(syp*1000)

    const hep = data7.works.Figure6.infectiousDiseaseSurveillance.hepatitisBScreening.date.seconds
    const newhep =new Date(hep*1000)

    const hiv = data7.works.Figure6.infectiousDiseaseSurveillance.hivScreening.date.seconds
    const newhiv =new Date(hiv*1000)

    const screendate = data7.works.Figure6.laboratoryScreening.gestationalDiabetes.dateScreened.seconds
    const newscreendate =new Date(screendate*1000)

    const cbc = data7.works.Figure6.laboratoryScreening.cbc.dateScreened.seconds
    const newcbc =new Date(cbc*1000)

    const timeDev = data7.works.Figure6.dateTimeOfDelivery.seconds
    const newTimeDev =new Date(timeDev*1000)

    const twenty = data7.works.Figure6.MomAndNewbornPostPartumCheckUps.withinTwentyFourHours.seconds
    const newTwenty =new Date(twenty*1000)

    const seven = data7.works.Figure6.MomAndNewbornPostPartumCheckUps.withinSevenDays.seconds
    const newseven =new Date(seven*1000)

    const m1 = data7.works.Figure6.micronutrientSupplementation2.ironWithFolicAcid.firstMonth.date.seconds
    const m2 = data7.works.Figure6.micronutrientSupplementation2.ironWithFolicAcid.secondMonth.date.seconds
    const m3 = data7.works.Figure6.micronutrientSupplementation2.ironWithFolicAcid.thirdMonth.date.seconds

    const newm1 =new Date(m1*1000)
    const newm2 =new Date(m2*1000)
    const newm3 =new Date(m3*1000)
    const vitaA = data7.works.Figure6.micronutrientSupplementation2.vitaminA.seconds
    const newVitaA=new Date(vitaA*1000)

    const iodineDate = data7.works.Figure6.micronutrientSupplementation1.iodineCapsules.seconds
    const newIodineDate =new Date(iodineDate*1000)

    const [data, setData] = useState({
        dateOfRegistration: newdateRegis,
        familySerialNo: data7.works.Figure6.familySerialNo,
        sociEconomicStatus: data7.works.Figure6.sociEconomicStatus,
        age: works.age,
        lmp: {
            lmp: newdatelmp ,
            gp: newdatedategp ,
        },
        edc: newdatedatedateedc,
        datesOfPrenatalCheckUps: {
            firstTri: newdatedatedatefirstTri  ,
            secondTri: newdatedatedatesecondTri,
            thirdTri: newdatedatedatethirdTri
        },
        immunizationStatus: {
            tetanusDiptheria: {
                td1: newdatetd1,
                td2: newdatetd2,
                td3: newdatetd3,
                td4: newdatetd4,
                td5: newdatetd5
            },
            fimStatus: data7.works.Figure6.immunizationStatus.fimStatus
        },
        micronutrientSupplementation1: {
            ironSulfate: {
                firstVisit: {

                 date: newdatefirst,
                    no: data7.works.Figure6.micronutrientSupplementation1.ironSulfate.firstVisit.no
                },
                secondVisit: {

                 date: newdatesecond,
                    no: data7.works.Figure6.micronutrientSupplementation1.ironSulfate.secondVisit.no
                },
                thirdVisit: {

                 date: newdatethird,
                    no: data7.works.Figure6.micronutrientSupplementation1.ironSulfate.thirdVisit.no
                },
                fourthVisit: {
                   date: newdatefourth,
                    no: data7.works.Figure6.micronutrientSupplementation1.ironSulfate.fourthVisit.no
                }
            },
            calciumCarbonate: {
                secondVisit: {

                  date: newcal2nd,
                    no: data7.works.Figure6.micronutrientSupplementation1.calciumCarbonate.secondVisit.no
                },
                thirdVisit: {

                     date: newcal3rd,
                    no: data7.works.Figure6.micronutrientSupplementation1.calciumCarbonate.thirdVisit.no
                },
                fourthVisit: {

                    date: newcal4th,
                    no: data7.works.Figure6.micronutrientSupplementation1.calciumCarbonate.fourthVisit.no
                }
            },
            iodineCapsules: newIodineDate
        },
        nutritionalAssessment: {

            low: data7.works.Figure6.nutritionalAssessment.low,
            normal: data7.works.Figure6.nutritionalAssessment.normal,
            high: data7.works.Figure6.nutritionalAssessment.high
        },
        dewormingTablet: newdeworm,
        infectiousDiseaseSurveillance: {
            syphilisScreening: {
                date: newsyp,
                result: data7.works.Figure6.infectiousDiseaseSurveillance.syphilisScreening.result,
            },
            hepatitisBScreening: {
                date: newhep,
                result: data7.works.Figure6.infectiousDiseaseSurveillance.hepatitisBScreening.result,
            },
            hivScreening: {
                date: newhiv,
            }
        },
        laboratoryScreening: {
            gestationalDiabetes: {
                dateScreened: newscreendate,
                result: data7.works.Figure6.laboratoryScreening.gestationalDiabetes.results
            },
            cbc: {
                dateScreened: newcbc,
                result: data7.works.Figure6.laboratoryScreening.cbc.results,
                givenIron: data7.works.Figure6.laboratoryScreening.cbc.givenIron
            }
        },
        birthWeight: {
            low: data7.works.Figure6.birthWeight.low,
            normal:data7.works.Figure6.birthWeight.normal,
            unknown: data7.works.Figure6.birthWeight.unknown
        },
        placeOfDelivery: {
            healthFacility: {
                type: data7.works.Figure6.placeOfDelivery.healthFacility.type,
                bemonc: data7.works.Figure6.placeOfDelivery.healthFacility.bemonc,
                ownership: data7.works.Figure6.placeOfDelivery.healthFacility.ownership,
            },
            nonHealthFacility: data7.works.Figure6.placeOfDelivery.nonHealthFacility,
            remarks: data7.works.Figure6.placeOfDelivery.remarks
        },
        dateTimeOfDelivery: newTimeDev,
        MomAndNewbornPostPartumCheckUps: {
            withinTwentyFourHours: newTwenty,
            withinSevenDays: newseven
        },
        micronutrientSupplementation2: {
            ironWithFolicAcid: {
                firstMonth: {
                    no: data7.works.Figure6.micronutrientSupplementation2.ironWithFolicAcid.firstMonth.no  ,
                    date: newm1
                },
                secondMonth: {
                    no: data7.works.Figure6.micronutrientSupplementation2.ironWithFolicAcid.secondMonth.no,
                    date: newm2
                },
                thirdMonth: {
                    no: data7.works.Figure6.micronutrientSupplementation2.ironWithFolicAcid.thirdMonth.no,
                    date: newm3
                }
            },
            vitaminA: newVitaA
        },
        remarks: data7.works.Figure6.remarks
    });
    const [currentStep, setCurrentStep] = useState(0);


    const makeRequest = (formData) => {

        updateUsers(formData);
    };
    const toast = useToast()
    async  function updateUsers(formData) {
        //create alert
        const documentId = JSON.parse(JSON.stringify(works.id))
        const userRef = doc(db, 'client', documentId);
        await  updateDoc(userRef,{
            Figure6: formData
        })
            .catch(function(error) {
            console.log(error)
            toast({
                title: 'Document Not Updated.',
                description: error,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }).then(function(any){
            toast({
                title: 'Document Updated.',
                description: "Successfully Updated Figure 6.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        })
    }






    const handleNextStep = (newData, final = false) => {
        setData((prev) => ({ ...prev, ...newData }));
        if (final) {
            makeRequest(newData);
            return;
        }
        setCurrentStep((prev) => prev + 1);
    };
    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentStep((prev) => prev - 1);
    };
    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepFour next={handleNextStep} prev={handlePrevStep} data={data} />,
        <StepFive next={handleNextStep} prev={handlePrevStep} data={data} />
    ];

    return <div className="App">{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({

});
const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };
    const fimStatusOpt = [
        { key: "✓", value: "✓" },
        { key: "X", value: "X" }
    ];
    const statusOpt = [
        { key: "1 - NHTS", value: "nhts" },
        { key: "2 - Non-NHTS", value: "non-nhts" }
    ]
    return (
        <Box boxShadow={'lg'} p={10}>
            <Formik
                validationSchema={stepOneValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <FormControl>
                            <SimpleGrid spacingY={8}>
                                <SimpleGrid columns={3} spacing={5}>
                                    <GridItem >
                                        <DatePicker
                                            name="dateOfRegistration"
                                            label="Date of Registration"
                                        />
                                    </GridItem >
                                    <GridItem >
                                        <NumberField
                                            name="familySerialNo"
                                            label="Family Serial No."
                                        />
                                    </GridItem>
                                    <GridItem >
                                        <Radio
                                            name="sociEconomicStatus"
                                            label="Socio Econimic Status"
                                            options={statusOpt}
                                        />
                                    </GridItem>
                                    <GridItem >
                                        <SimpleGrid spacingX={2}>
                                            <GridItem >
                                                <FormLabel>
                                                    Age
                                                </FormLabel>
                                            </GridItem>
                                            <GridItem>
                                                <NumberField
                                                    placeholder=""
                                                    name="age"
                                                />
                                            </GridItem>
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SimpleGrid columns={2} spacingX={2}>
                                            <GridItem >
                                                <FormLabel>
                                                    LMP
                                                </FormLabel>
                                            </GridItem>
                                            <GridItem >
                                                <FormLabel>
                                                    G-P
                                                </FormLabel>
                                            </GridItem>
                                            <GridItem>
                                                <DatePicker
                                                    name="lmp.lmp"
                                                />
                                            </GridItem>
                                            <GridItem>
                                                <DatePicker
                                                    name="lmp.gp"
                                                />
                                            </GridItem>
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SimpleGrid>
                                            <GridItem>
                                                <FormLabel>
                                                    EDC
                                                </FormLabel>
                                            </GridItem>
                                            <GridItem>
                                                <DatePicker
                                                    name="edc"
                                                    label=""
                                                />
                                            </GridItem>
                                        </SimpleGrid>
                                    </GridItem>
                                </SimpleGrid>
                                <SimpleGrid columns={3} spacingX={5}>
                                    <GridItem colSpan={3}>
                                        <SubHeading
                                            text="Dates of Pre-natal Check-ups"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            label="1st Tri"
                                            name="datesOfPrenatalCheckUps.firstTri" />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            label="2nd Tri"
                                            name="datesOfPrenatalCheckUps.secondTri" />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            label="3rd Tri"
                                            name="datesOfPrenatalCheckUps.thirdTri" />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHeading
                                    text="Immunization Status"
                                />
                                <SimpleGrid columns={5} spacingX={3}>
                                    <GridItem colSpan={5}>
                                        <SubHeading
                                            text="Date Tetanus Diptheria(TD) or Tetanus Toxoid(TT given)"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            name="immunizationStatus.tetanusDiptheria.td1"
                                            label="Td1/TT1"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            name="immunizationStatus.tetanusDiptheria.td2"
                                            label="Td2/TT2"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            name="immunizationStatus.tetanusDiptheria.td3"
                                            label="Td3/TT3"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            name="immunizationStatus.tetanusDiptheria.td4"
                                            label="Td4/TT4" />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            name="immunizationStatus.tetanusDiptheria.td5"
                                            label="Td5/TT5"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Radio
                                            label="FIM Status"
                                            name="immunizationStatus.fimStatus"
                                            options={fimStatusOpt}
                                        />
                                    </GridItem>
                                </SimpleGrid>
                            </SimpleGrid>
                        </FormControl>
                        <HStack mt={5}>
                            <Spacer />
                            <Button type="submit" colorScheme='blue'>Next</Button>
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

const stepTwoValidationSchema = Yup.object({

});
const StepTwo = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };

    return (
        <Box boxShadow={'lg'} p={10}>
            <Formik
                validationSchema={stepTwoValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <FormControl>
                            <SimpleGrid spacingY={8} >
                                <FormHeading
                                    text="Micronutrient Supplementation"
                                />
                                <SimpleGrid spacing={3}>
                                    <SimpleGrid columns={4} spacing={3}>
                                        <GridItem colSpan={4}>
                                            <SubHeading
                                                text="Iron Sulfate  with Folic Acid"
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        1st visit (1st tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.ironSulfate.firstVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.ironSulfate.firstVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        2nd visit (2nd tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.ironSulfate.secondVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.ironSulfate.secondVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        3rd visit (3rd tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.ironSulfate.thirdVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.ironSulfate.thirdVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        4th visit (3rd tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.ironSulfate.fourthVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.ironSulfate.fourthVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                    </SimpleGrid>
                                    <SimpleGrid columns={3} spacing={3}>
                                        <GridItem colSpan={3}>
                                            <SubHeading
                                                text="Calcium Carbonate"
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        2nd visit (2nd tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.calciumCarbonate.secondVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.calciumCarbonate.secondVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        3rd visit (3rd tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.calciumCarbonate.thirdVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.calciumCarbonate.thirdVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                        <GridItem>

                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        4th visit (3rd tri)
                                                    </FormLabel>
                                                </Center>
                                                <NumberField
                                                    name="micronutrientSupplementation1.calciumCarbonate.fourthVisit.no"
                                                    label="Number of Tablets"
                                                />
                                                <DatePicker
                                                    name="micronutrientSupplementation1.calciumCarbonate.fourthVisit.date"
                                                    label="Date Given"
                                                />
                                            </SimpleGrid>
                                        </GridItem>
                                    </SimpleGrid>
                                    <SimpleGrid columns={4} spacing={3}>
                                        <GridItem colSpan={4}>
                                            <SubHeading
                                                text="Iodine Capsules"
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <SimpleGrid spacingX={3}>
                                                <Center>
                                                    <FormLabel>
                                                        1st visit
                                                    </FormLabel>
                                                </Center>
                                                <DatePicker
                                                    name="micronutrientSupplementation1.iodineCapsules"
                                                    label="Date 2 capsules given" />

                                            </SimpleGrid>
                                        </GridItem>
                                    </SimpleGrid>
                                </SimpleGrid>
                            </SimpleGrid>
                        </FormControl>
                        <HStack mt={5}>
                            <Spacer />
                            <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                                Back
                            </Button>
                            <Button type="submit" colorScheme='blue'>Next</Button>
                        </HStack>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


const stepThreeValidationSchema = Yup.object({

});
const StepThree = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };
    const postiveNegativeOpt = [
        { key: "+ Positive", value: "positive" },
        { key: "- Negative", value: "negative" }
    ];
    return (
        <Box boxShadow={'lg'} p={10}>
            <Formik
                validationSchema={stepThreeValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <FormControl>
                            <SimpleGrid spacingY={8} >
                                <FormHeading
                                    text="Nutritional Assessment"
                                />
                                <SimpleGrid spacing={3}>
                                    <SimpleGrid columns={3} spacing={3}>
                                        <GridItem colSpan={3}>
                                            <SubHeading
                                                text="BMI for 1st Tri"
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <NumberField
                                                name="nutritionalAssessment.low"
                                                label="Low"
                                                placeholder="< 18.5"
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <NumberField
                                                name="nutritionalAssessment.normal"
                                                label="Normal"
                                                placeholder="18.5 - 22.9"
                                            />
                                        </GridItem>
                                        <GridItem>
                                            <NumberField
                                                name="nutritionalAssessment.high"
                                                label="High"
                                                placeholder="≥ 23"
                                            />
                                        </GridItem>
                                    </SimpleGrid>
                                </SimpleGrid>
                                <FormHeading
                                    text="Deworming Tablet"
                                />
                                <SimpleGrid spacing={3}>
                                    <SimpleGrid spacing={5}>
                                        <SimpleGrid columns={3} spacing={3}>
                                            <GridItem colSpan={3}>
                                                <SubHeading
                                                    text="date Given, 2nd or 3rd Tri"
                                                />
                                            </GridItem>
                                            <GridItem>
                                                <DatePicker
                                                    name="dewormingTablet"
                                                />
                                            </GridItem>
                                        </SimpleGrid>
                                    </SimpleGrid>
                                </SimpleGrid>
                                <FormHeading
                                    text="Infectious Disease Surveillance"
                                />
                                <SimpleGrid columns={3} spacing={3}>
                                    <GridItem>
                                        <SubHeading
                                            text="Syphilis Screening"
                                        />
                                        <SimpleGrid spacingX={4}>
                                            <DatePicker
                                                name="infectiousDiseaseSurveillance.syphilisScreening.date"
                                                label="RPR or RDT Result"
                                            />
                                            <Radio
                                                label=""
                                                name="infectiousDiseaseSurveillance.syphilisScreening.result"
                                                options={postiveNegativeOpt}
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SubHeading
                                            text="Hepatitis B Screening"
                                        />
                                        <SimpleGrid spacingX={4}>
                                            <DatePicker
                                                name="infectiousDiseaseSurveillance.hepatitisBScreening.date"
                                                label="Result of HBsAg Test"
                                            />
                                            <Radio
                                                label=""
                                                name="infectiousDiseaseSurveillance.hepatitisBScreening.result"
                                                options={postiveNegativeOpt}
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SubHeading
                                            text="HIV Screening"
                                        />
                                        <SimpleGrid spacingX={4}>
                                            <DatePicker
                                                name="infectiousDiseaseSurveillance.hivScreening.date"
                                                label="Date screened"
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                </SimpleGrid>
                            </SimpleGrid>
                            <HStack mt={5}>
                                <Spacer />
                                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                                    Back
                                </Button>
                                <Button type="submit" colorScheme='blue'>Next</Button>
                            </HStack>
                        </FormControl>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


const stepFourValidationSchema = Yup.object({

});
const StepFour = (props) => {
    const handleSubmit = (values) => {
        props.next(values);
    };
    const postiveNegativeOpt = [
        { key: "+ Positive", value: "positive" },
        { key: "- Negative", value: "negative" }
    ]
    const ownershipOpt = [
        { key: "Public", value: "public" },
        { key: "Private", value: "private" }
    ]
    const nonHealthFacilityOpt = [
        { key: "Home", value: "home" },
        { key: "Others", value: "others" }
    ]
    const typeOpt = [
        { key: "BHS", value: "bhd" },
        { key: "RHU/MHC", value: "rhu/mhc" },
        { key: "Lying-in", value: "lying-in" },
        { key: "Hospital", value: "hospital" },
        { key: "Birthing Homes", value: "birthingHomes" },
        { key: "DOH-licensed Ambulance", value: "dohLicensedAmbulance" }
    ];
    const unknownSelections = [
        { key: "Unknown", value: "unkown" }
    ];
    const capabilitySelections = [
        { key: "Capable", value: "capable" }
    ];
    return (
        <Box boxShadow={'lg'} p={10}>
            <Formik
                validationSchema={stepFourValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <FormControl>
                            <SimpleGrid spacingY={8} >
                                <FormHeading
                                    text="Laboratory Screening"
                                />
                                <SimpleGrid columns={2} spacing={3}>
                                    <GridItem>
                                        <SubHeading
                                            text="Gestational Diabetes"
                                        />
                                        <SimpleGrid spacingX={4}>
                                            <DatePicker
                                                name="laboratoryScreening.gestationalDiabetes.dateScreened"
                                                label="Date Screened"
                                            />
                                            <Radio
                                                label=""
                                                name="laboratoryScreening.gestationalDiabetes.result"
                                                options={postiveNegativeOpt}
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SubHeading
                                            text="CBC/Hgb & Hct Count"
                                        />
                                        <SimpleGrid spacingX={4}>
                                            <DatePicker
                                                name="laboratoryScreening.cbc.dateScreened"
                                                label="Date Screened"
                                            />
                                            <Radio
                                                label=""
                                                name="laboratoryScreening.cbc.result"
                                                options={postiveNegativeOpt}
                                            />
                                            <TextField
                                                name="laboratoryScreening.cbc.givenIron"
                                                label="Given Iron"
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                </SimpleGrid>
                                <FormHeading
                                    text="Birth Weight"
                                />
                                <SimpleGrid columns={3} spacing={3}>
                                    <GridItem>
                                        <NumberField
                                            label="Low"
                                            name="birthWeight.low"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <NumberField
                                            label="Normal"
                                            name="birthWeight.normal"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Checkbox
                                            label="Check box if unknown"
                                            name="birthWeight.unknown"
                                            options={unknownSelections}
                                        />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHeading
                                    text="Place of Delivery"
                                />
                                <SimpleGrid columns={4} spacing={3}>
                                    <GridItem colSpan={3}>
                                        <SubHeading
                                            text="Health Facility"
                                        />
                                    </GridItem>
                                    <GridItem colSpan={1}>
                                        <SubHeading
                                            text="Non-Health Facility"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Radio
                                            name="placeOfDelivery.healthFacility.type"
                                            label="Type"
                                            options={typeOpt}
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Checkbox
                                            name="placeOfDelivery.healthFacility.bemonc"
                                            label="BEmONC/CEmONC capable"
                                            options={capabilitySelections}

                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Radio
                                            name="placeOfDelivery.healthFacility.ownership"
                                            label="Ownership"
                                            options={ownershipOpt}
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <Radio
                                            name="placeOfDelivery.nonHealthFacility"
                                            label=""
                                            options={nonHealthFacilityOpt}
                                        />
                                    </GridItem>
                                    <GridItem colSpan={4}>
                                        <TextArea
                                            label="Remarks"
                                            name="placeOfDelivery.remarks"
                                        />
                                    </GridItem>
                                </SimpleGrid>
                            </SimpleGrid>
                            <HStack mt={5}>
                                <Spacer />
                                <Button type="button" colorScheme='blue' onClick={() => props.prev(values)} >
                                    Back
                                </Button>
                                <Button type="submit" colorScheme='blue'>Next</Button>
                            </HStack>
                        </FormControl>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

const stepFiveValidationSchema = Yup.object({

});
const StepFive = (props) => {
    const handleSubmit = (values) => {
        props.next(values, true);
    };
    return (
        <Box boxShadow={'lg'} p={10}>
            <Formik
                validationSchema={stepFiveValidationSchema}
                initialValues={props.data}
                onSubmit={handleSubmit}
            >
                {({ values }) => (
                    <Form>
                        <FormControl>
                            <SimpleGrid spacingY={8} >
                                <GridItem>
                                    <FormHeading
                                        text="Date and Time of Delivery"
                                    />
                                    <SimpleGrid spacing={5}>
                                        <GridItem>
                                            <DateTimePicker
                                                label="Date and Time"
                                                name="dateTimeOfDelivery.time"
                                            />
                                        </GridItem>
                                    </SimpleGrid>
                                </GridItem>
                                <FormHeading
                                    text="Date of Mother with their Newborns' Post-Partum Check-ups"
                                />
                                <SimpleGrid columns={2} spacing={3}>
                                    <GridItem>
                                        <DatePicker
                                            label="Within 24 hours after delivery"
                                            name="MomAndNewbornPostPartumCheckUps.withinTwentyFourHours"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <DatePicker
                                            label="Within 7 days after delivery"
                                            name="MomAndNewbornPostPartumCheckUps.withinSevenDays"
                                        />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHeading
                                    text="Micronutrients Supplementation"
                                />
                                <SimpleGrid columns={3} spacing={3}>
                                    <GridItem colSpan={3}>
                                        <SubHeading
                                            text="Iron Sulfate  with Folic Acid"
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <SimpleGrid spacingX={3}>
                                            <Center>
                                                <FormLabel>
                                                    1st month postpartum
                                                </FormLabel>
                                            </Center>
                                            <NumberField
                                                name="micronutrientSupplementation2.ironWithFolicAcid.firstMonth.no"
                                                label="Number of Tablets"
                                            />
                                            <DatePicker
                                                name="micronutrientSupplementation2.ironWithFolicAcid.firstMonth.date"
                                                label="Date Given"
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SimpleGrid spacingX={3}>
                                            <Center>
                                                <FormLabel>
                                                    2nd month postpartum
                                                </FormLabel>
                                            </Center>
                                            <NumberField
                                                name="micronutrientSupplementation2.ironWithFolicAcid.secondMonth.no"
                                                label="Number of Tablets"
                                            />
                                            <DatePicker
                                                name="micronutrientSupplementation2.ironWithFolicAcid.secondMonth.date"
                                                label="Date Given"
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                    <GridItem>
                                        <SimpleGrid spacingX={3}>
                                            <Center>
                                                <FormLabel>
                                                    3rd month postpartum
                                                </FormLabel>
                                            </Center>
                                            <NumberField
                                                name="micronutrientSupplementation2.ironWithFolicAcid.thirdMonth.no"
                                                label="Number of Tablets"
                                            />
                                            <DatePicker
                                                name="micronutrientSupplementation2.ironWithFolicAcid.thirdMonth.date"
                                                label="Date Given"
                                            />
                                        </SimpleGrid>
                                    </GridItem>
                                </SimpleGrid>
                                <SimpleGrid columns={2}>
                                    <GridItem >
                                        <SubHeading
                                            text="Vitamin A"
                                        />
                                        <DatePicker
                                            name="micronutrientSupplementation2.vitaminA"
                                            label="Date Given"
                                        />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHeading
                                    text="Remarks"
                                />
                                <GridItem >
                                    <TextArea
                                        name="remarks"
                                        label=""
                                    />
                                </GridItem>
                            </SimpleGrid>
                            <HStack mt={5}>
                                <Spacer />
                                <Button
                                    type="button"
                                    colorScheme='blue'
                                    onClick={() => props.prev(values)}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    colorScheme='green'
                                >
                                    Submit</Button>
                            </HStack>
                        </FormControl >
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


