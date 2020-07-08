var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "imgextension": "png",
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "poititle": "Markers",
            "north_direction": 0,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "last_rendertime": 1594194980,
            "world": "world",
            "showlocationmarker": true,
            "path": "day",
            "minZoom": 0,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "compass": true,
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true
        },
        "cacheTag": "1594195403",
        "debug": true,
        "north_direction": "lower-left"
    }
};
