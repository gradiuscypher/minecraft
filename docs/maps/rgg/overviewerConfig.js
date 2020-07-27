var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "isOverlay": false,
            "zoomLevels": 8,
            "last_rendertime": 1595879779,
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "maxZoom": 8,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "name": "Daytime Render",
            "north_direction": 0,
            "poititle": "Markers",
            "defaultZoom": 1,
            "base": ""
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1595880170",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true
        },
        "debug": true
    }
};
