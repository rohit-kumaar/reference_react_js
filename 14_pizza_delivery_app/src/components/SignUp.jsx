import React from 'react';
import Header from './Header';

function SignUp() {
  return (
    <>
      <main>
        <div className="container mx-auto px-8">
          <div className="bg-slate-200 p-5">
            <div className="mt-10 mb-4 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form method="POST" enctype="multipart/form-data">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              for="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                              <span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autocomplete="given-name"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              for="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name<span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autocomplete="family-name"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              for="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address<span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autocomplete="email"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              for="password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Password<span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              for="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Country
                            </label>
                            <select
                              id="country"
                              name="country"
                              autocomplete="country-name"
                              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label
                              for="street-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Street address
                              <span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autocomplete="street-address"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label for="city" className="block text-sm font-medium text-gray-700">
                              City<span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              autocomplete="address-level2"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label for="region" className="block text-sm font-medium text-gray-700">
                              State / Province
                              <span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="region"
                              id="region"
                              autocomplete="address-level1"
                              className="sign-up-input"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              for="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              ZIP / Postal code
                              <span className="text-lg font-bold text-red-700">*</span>
                            </label>
                            <input
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autocomplete="postal-code"
                              className="sign-up-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                            <div className="mt-1 flex items-center">
                              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                <svg
                                  className="h-full w-full text-gray-300"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                              <button
                                type="button"
                                className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Change
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Cover photo
                            </label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    for="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                          <button type="submit" className="btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
