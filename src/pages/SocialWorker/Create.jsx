import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Button, Stack, FormControl, FormLabel, Input, FormErrorMessage
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import {legislativeDistrictOptions,administrativeDistricts,barangayOptions,positionOptions} from "../components/Constants";
import Select from '../components/Fields/Select';

export default function Create() {
    const { manualLogin } = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()



    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <AddIcon />
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
                        Create New Social Worker Account
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Formik
                                initialValues={{
                                    id: uuidv4(),
                                    displayName: "",
                                    email: '',
                                    administrativeDistrict: '',
                                    legislativeDistrict: '',
                                    barangay: '',
                                    isAdmin: false,
                                }}
                                onSubmit={(values, actions) => {
                                    manualLogin(values)

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
                                            }
                                        )
                                }
                                }
                            >
                                {(props) => (

                                    <Form>
                                        {/* <TextField
                                            name="displayName"
                                            label="Name"
                                        />
                                        <TextField
                                            name="email"
                                            label="Email"
                                        /> */}
                                        <Field name='displayName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.displayName && form.touched.displayName}>
                                                    <FormLabel htmlFor='displayName'>Display Name</FormLabel>
                                                    <Input {...field} id='displayName' placeholder='displayName' />
                                                    <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='email' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                                                    <Input {...field} id='email' placeholder='email' />
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
                                        <Select
                                            label="Position"
                                            name="isAdmin"
                                            options={positionOptions}
                                        />
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
                        <Button
                            variant='outline'
                            mr={3}
                            onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}