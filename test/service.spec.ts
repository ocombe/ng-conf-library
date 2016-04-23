import {SampleService} from "../src/service";
import {beforeEachProviders, it, describe, expect, inject} from "angular2/testing";

export function main() {
    describe("Sample service", () => {
       beforeEachProviders(() => [SampleService]);

        it('should work', inject([SampleService], (service: SampleService) => {
            expect(SampleService).toBeDefined();
            expect(service).toBeDefined();
            expect(service).toBeAnInstanceOf(SampleService);
            expect(service.title).toEqual("Sample service");
        }));
    });
}