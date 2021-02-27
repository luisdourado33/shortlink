import React, { useState, useEffect } from 'react';

import {
    Container,
    MainDiv,
    LinkList,
    Input,
    Form,
    SubmitButton,
    LinkItem
} from './styles';
import { css } from "@emotion/core";
import api from '../../services/api';

// Animations
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Main = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    const notify = (toastCallback, msg) => {
        toastCallback === 'error' && toast.error(msg);
        toastCallback === 'success' && toast.success(msg);
    }

    const generateLink = () => {
        setLoading(true);
        api.post('/generate', {
            url
        })
            .then(res => {
                console.log(res.data);
                setLinks([...links, res.data]);
                notify('success', `New link added: ${res.data.short}`);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response.data.error)
                notify('error', err.response.data.error);
                setLoading(false);
            });
    }

    return (
        <>
            <Container>
                <MainDiv>
                    <h3 style={{ fontVariant: 'all-small-caps' }}>ShortLink</h3>
                    <Form>
                        <ClimbingBoxLoader color={"#333"} loading={loading} css={override} size={25} />
                        {!loading &&
                            <>
                                <Input
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="Place your url here" />
                                <SubmitButton onClick={() => generateLink(url)}>Generate and save</SubmitButton>
                            </>
                        }
                    </Form>
                </MainDiv>
            </Container>
            <ToastContainer
                closeOnClick={false}

            />
        </>
    );
}

export default Main;