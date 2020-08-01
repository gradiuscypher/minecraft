var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "overlays": true
        },
        "cacheTag": "1596297762",
        "debug": true
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "poititle": "Markers",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "last_rendertime": 1596297379,
            "zoomLevels": 8,
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "north_direction": 0,
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "isOverlay": false,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ]
};
