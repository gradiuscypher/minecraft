var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap"
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "spawn": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        },
        "cacheTag": "1596996083"
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "last_rendertime": 1596995880,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "minZoom": 0,
            "defaultZoom": 1,
            "imgextension": "png",
            "poititle": "Markers",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "maxZoom": 10,
            "zoomLevels": 10,
            "world": "Core01",
            "path": "day",
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
