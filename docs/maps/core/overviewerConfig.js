var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "map": {
        "controls": {
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1598558485",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "minZoom": 0,
            "last_rendertime": 1598558280,
            "poititle": "Markers",
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "base": "",
            "isOverlay": false,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "defaultZoom": 1,
            "imgextension": "png"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
