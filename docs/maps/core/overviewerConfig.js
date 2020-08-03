var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1596420082"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "path": "day",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "north_direction": 0,
            "zoomLevels": 10,
            "base": "",
            "last_rendertime": 1596419880,
            "poititle": "Markers",
            "showlocationmarker": true,
            "maxZoom": 10
        }
    ]
};
