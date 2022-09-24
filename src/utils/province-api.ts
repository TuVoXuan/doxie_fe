import adminstrativeApi from '../api/administrative-unit';

export const getProvinces = (setValue: (value: any) => void) => {
    adminstrativeApi.getProvinces().then((value) => {
        const result = value.data.results.map((item) => {
            const option: IOption = {
                content: item.province_name,
                value: item.province_name,
                id: item.province_id,
            };
            return option;
        });

        setValue(result);
    });
};

export const getDistricts = (provinceId: string, setValue: (value: any) => void) => {
    adminstrativeApi.getDistricts(provinceId).then((value) => {
        const result = value.data.results.map((item) => {
            const option: IOption = {
                content: item.district_name,
                value: item.district_name,
                id: item.district_id,
            };
            return option;
        });

        setValue(result);
    });
};

export const getWards = (districtId: string, setValue: (value: any) => void) => {
    adminstrativeApi.getWards(districtId).then((value) => {
        const result = value.data.results.map((item) => {
            const option: IOption = {
                content: item.ward_name,
                value: item.ward_name,
                id: item.ward_id,
            };
            return option;
        });

        setValue(result);
    });
};
