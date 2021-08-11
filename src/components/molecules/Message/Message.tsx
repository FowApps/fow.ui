import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Lottie from 'react-lottie';

import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';
import Button from '../../atoms/Button';

import { Wrapper } from './styles';

export interface MessageProps {
    /**
     * type of message
     */
    type: 'error' | 'success' | 'plus' | 'empty';
    /**
     * width of image
     */
    width?: number | string;
    /**
     * lottie flag
     */
    isAnimated?: boolean;
    /**
     * message text
     */
    message: string;
    /**
     * action button text
     */
    actionText?: string;
    /**
     * action button icon
     */
    actionIcon?: FontAwesomeIconProps['icon'];
    /**
     * action button click event
     */
    onClickAction?: () => void;
}

const sources = {
    error: {
        animated:
            'https://drive.google.com/u/0/uc?id=1GCD6n9Gaftevn285WkctHRMNhPfuNnkH&export=download',
        static: 'https://lh6.googleusercontent.com/Nbazx96yrT0-Qf0aWb9IihxxbruqXZU5ysSSWNuGfC-826wrq-vUllxePxCCH8-uixNj-TFrMfIGpbNGIi-b=w2559-h937-rw',
    },
    success: {
        animated:
            'https://drive.google.com/u/0/uc?id=1WsIEsZGizpuNr1Iy2hrPPW0iiH4HQes4&export=download',
        static: 'https://lh3.googleusercontent.com/fife/AAWUweUQYWE5QJB1qRMcEyl4tjnGBiDCAXkWbYn5_wcp1gtPziHPos-2DWqAtcqZ4abVVd8AghvQI4G-uR8jGPA7qr6PPBXF32Lh4bZCl9-JhIf7v78HVTQoBW8zGXbKQnEMQCV2CWPsINjOhPNBmx4FhsBBOfJeNL5AUd7JZ6Q8tLn8DmH6o6xrnawPmG7m2CL3ycgi9PZf3yu1CAYbuRsG6YZd-_MQrHqv8xsP419iYcaHFkkLGwhOk13Opg5sTJZRf6qDhVUFGCwE2GeLVnXwUy3Xk6vEwkNWKMPZZkOhmeTnjFTqlz1ktTMwqb4r3E1zJ2xsv2xoPAATIA9_fX8geVR4R4ahM_cEQv4wHeAdKyhUcgF_AdXT3tfBxpmT4asWC4J7IykkmimWTS08DhoGWVuw9qWuAxbzQKS1nrIKEY7WN9ztJHIePAjaVUWDlTjzrosvFI-yOxqqnqFx58VIXHFWu5tewYq-HfpSy034XbJKR-Jw-6fm0XEZzmOuk9NU_1hu6NV21cIOkRfDsE7wdzcFN-wrTTqfSnVPrpfOPjD0gpZ3-V-JS_Fk7uDsoZfeod9ISdUcL4kOY01zcp9jS9QXVRSqnfxFQiMDkt-LGWqF8Q2iv02AwvLhLotL5GfCAv6OOgNzyDoN2tHBo9uAAsHtuqv-IKdtznr2oAld-bUXiaR7hjSenrhz-UN3jjadWG9WNWrI7vaY7CqDMb7yI-bbwYZup7UZIw=w2559-h937-ft',
    },
    plus: {
        animated:
            'https://drive.google.com/u/0/uc?id=16S4SCQ_EPUD5z5Wz4QHqPJsLjlLPthpl&export=download',
        static: 'https://lh3.googleusercontent.com/fife/AAWUweVuPVP11_U_U8s37JUMB3nJ8G32RzJRosOfu-LaktvmpgSSwkgl37-VTOgReBVT9Z3ntQN7MhbuOYI7TyPjZYPfUZbigUi1CCUSBIDl-Mgi_5f-WX-Gw7D0BAwO4BBjvnx2tYlr7BiwfCcu5_Kb_-WpftnOJAALdRrwZpDLRNlinFmtJldHyg66HuXwemygzu_Gu9ZGicNwuTeLNcDm-8n_vwDOGfv0mxUAc_hfLa0lem-6FoEJd5CIfDd1_JojfVquZoIlpGC9BKrPsmqHmqOJPT79srj62jIlaD96D6JucfgmIoFyFfdxRtg32bB5XM1tzpyWWfVyUcWv0c2vu06dXMYTxFMeBQzrGoj4iobIGu6hsliXm_j0FS9fILBgeywwgAaiiqKSo6ZFrJMjRpkqcApJlMxcRMCoXs2kLO8AdOXy-xEq-Qdvb4Ve2UICwZsmZmRi6wclgrHMVayfbnwtE0DBlPKfTix5IQNuB0Ok-y-P9y-0UPKEof-Tnxy0UH8U6SVJMKWztkdkCOxdgf8Nif3lqtphTi2sDkLXJbIVng6ROsk7SXEaovaJolGOwBNvNEJFAebBmKS87zG65jmxbx6S4f6fvn76iW91QtRKjjuq9rsrFItwdeYBY4XA_04oW89FS3pGkViN-Rmai84kWtu3jTUKHDaJYYI-v2Vb9UuPdMT0TYtS7YSp2RIhj8bSbKK5NrIy1JYPRkw48QIJVj121grcyg=w1733-h937-ft',
    },
    empty: {
        animated:
            'https://drive.google.com/u/0/uc?id=1PEDV2xSje1f-7kV8ZLQETliqVL2bphRB&export=download',
        static: 'https://lh3.googleusercontent.com/fife/AAWUweXp0nYInPYZ97HzfaiKchGjUz0qixteRhItnrfH8V_3aNCVkRiZYVZP382miylAvIivWQPGXEsBKYTkZ9iQboAK66rmjglHgUdekrZrTJc8feWxW3UkJzP-PjameTfgqi4-bd7RaCFSZVPasl6O_QcKtGa0ywWdrPMNVntN_s_gsDcbMM5i3x-sh3k8LRxAnLfoVLqHLUh6Kxb6lFnX163s1g_4tdJ9EjpxQZNd6n8gBbalebjUFce4yHIoYtQURTphHIWgojzbNWSEfC3jGQDxbUUD2YKPmHUGpXKSPcbVr9yT7OYu0yz01b1fmaxQzU_4RPDqo-0srdEDVxC0HY1siEWZOyt3Sl-o3srq8vBQhV7cz91Qe7FZlI-91JCS03cflCa0t-tVB1F-sgk7iHJRvT7T8-iGcn5PhRJPsgHtjRR6ZTEaKJ7Q_T9RQDdTeABYk-RrDESMjHta9el2W37SShRmIHMkEBTxp4bPci-Tq9UrfflTl5zsmP9gEYWkseJ6Tzvf43NdSFxlStbT96DMAUYP0P56Em8rxcamGi2sqnWk5WIiRqceb1Ey024Mv_3_Gq_l8Wifz1xWq826TfAbiYozH1Fluic8ZsuoL_ZroaZNRGcbnqTMdmi2dabb1MHcyJ2r0-i1mEVzkOuDw2hxydmIgJa-KDJ1b4t-eX6_AAnUOkFc4MpI_FcM0m6zK6fuavQd_sCbiPaVyy31D7XilY1petAiRA=w1733-h937-ft',
    },
};

const Message = ({
    message,
    width = 400,
    actionText,
    actionIcon,
    onClickAction,
    isAnimated = false,
    type,
}: MessageProps): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        path: sources[type].animated,
        animationData: null,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <Wrapper>
            <Space direction="vertical" size="large" align="center">
                {isAnimated ? (
                    <Lottie
                        options={defaultOptions}
                        height={width}
                        width={width}
                    />
                ) : (
                    <img
                        width={width}
                        src={sources[type].static}
                        alt="FowApps"
                    />
                )}
                <Subtitle color="disabled">{message}</Subtitle>
                {actionText && (
                    <Button
                        leftIcon={actionIcon}
                        size="large"
                        variant="outlined"
                        onClick={onClickAction}>
                        {actionText}
                    </Button>
                )}
            </Space>
        </Wrapper>
    );
};

export default Message;
