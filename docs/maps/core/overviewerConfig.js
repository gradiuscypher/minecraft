var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "map": {
        "controls": {
            "pan": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1598040084"
    },
    "tilesets": [
        {
            "imgextension": "png",
            "north_direction": 0,
            "minZoom": 0,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "base": "",
            "last_rendertime": 1598039880,
            "poititle": "Markers",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ]
};
