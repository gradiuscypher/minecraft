var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "map": {
        "debug": true,
        "cacheTag": "1599512485",
        "controls": {
            "spawn": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "last_rendertime": 1599512280,
            "minZoom": 0,
            "showlocationmarker": true,
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "path": "day",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "maxZoom": 10
        }
    ],
    "worlds": [
        "Core01"
    ]
};
