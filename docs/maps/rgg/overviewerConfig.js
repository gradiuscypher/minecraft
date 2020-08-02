var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 8,
            "poititle": "Markers",
            "base": "",
            "defaultZoom": 1,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "zoomLevels": 8,
            "last_rendertime": 1596401779,
            "name": "Daytime Render",
            "path": "day",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596402169",
        "controls": {
            "pan": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "overlays": true
        },
        "debug": true
    }
};
